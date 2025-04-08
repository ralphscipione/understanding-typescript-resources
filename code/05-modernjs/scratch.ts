class MyTools {
  constructor() {}

  //   public static sum = (numbers: number[], initialValue: number) => {
  //     return numbers.reduce((curResult, curValue) => {
  //       return curResult + curValue;
  //     }, initialValue);
  //   };

  //   public static sum = (numbers: number[]): number => {
  //     return numbers.reduce(
  //       (accumulator, currentValue) => accumulator + currentValue
  //     );
  //   };


 static sum (numbers: number[]):number ;
 static sum (numbers: number[], initialValue: number):number ;
 static sum (numbers: number[], initialValue?:number): number {
    let result = 0;
    if (initialValue && numbers.length > 0) {
        result = numbers.reduce((curResult, curValue) => {
            return curResult + curValue;
          }, 
          initialValue);
    } else if (numbers.length > 0){
        result = numbers.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
    } else{
        throw new Error("Invalid input.");
    }
    return result;
}

  
}
const array1 = [1, 2, 3, 4];

console.log(MyTools.sum([],0));
console.log(MyTools.sum([1,2,3,4,5]));
