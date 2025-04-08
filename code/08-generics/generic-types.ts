//#region ******************** Hello world of Generics
// https://www.typescriptlang.org/docs/handbook/2/generics.html

// function identity(arg: number) {
//     return arg;
// }

// function identity(arg: any) {
//     return arg;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

//let output = identity<string>("myString");

//#endregion

//#region ******************** Working with Generic Type Variables / Generic Types
// https://www.typescriptlang.org/docs/handbook/2/generics.html#working-with-generic-type-variables

// const values: unknown[] = [
//   "Some text",
//   null,
//   NaN,
//   5,
//   true,
//   undefined,
//   Symbol(),
//   Symbol,
// ];
// values.forEach((value) => {
//   const outputType = typeof value;
//     console.log(`The type of the value ${String(value)} is ${typeof identity(value)}`);
// });

// let myIdentity: <T>(arg: T) => T = identity;

// Object Literal
// let myIdentity: {<T>(arg: T): T} = identity;

// console.log(`${typeof identity('hi')}`);
// console.log(`${typeof myIdentity('hi')}`);

// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn = identity;

// interface GenericIdentityFn<T> {
//     (arg: T):T;
// }
// function identity<T>(arg:T): T {
//     return arg;
// }

//#endregion

//#region ******************** Generic Classes
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes

// class GenericNumber<NumType> {
//     zeroValue!: NumType;
//     add!: (x: NumType, y: NumType) => NumType;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x,y) {
//     return x+y;
// };

// //console.log(`${myGenericNumber.add(4,3)}`);

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x,y) {
//     return x + y;
// };

// console.log(stringNumeric.add(stringNumeric.zeroValue,"test"));

//#endregion

//#region ******************** Generic Constraints
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints

// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length); // Error here as some types do not have a .length property
// }

// interface LengthWise {
//     length: number;
// }

// function loggingIdentity<T extends LengthWise>(arg: T): T {
//     console.log(arg.length); // Now we know it has a .length property so no error.
//     return arg;
// }

// loggingIdentity({length: 2});
// loggingIdentity({length: 2, name: 'banana'});
// loggingIdentity({length: });

//#endregion

//#region ******************** Using Type Parameters in Generic Constraints
//https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints

// function getProperty<T, Key extends keyof T>(obj: T, key: Key){
//     return obj[key];
// }
// let x = {a:1, b:2, c:3, d:4};

// getProperty(x, "a");
// //getProperty(x, "m"); //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
// getProperty(x, "b");

//#endregion

//#region ******************** Using Class Types in Generics
// https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics

// function create<T>(c: { new (): T }): T {
//   return new c();
// }

// class BeeKeeper {
//   hasMask: boolean = true;
// }

// class ZooKeeper {
//   nameTag: string = "Mike";
// }

// class Animal {
//   numLegs: number = 4;
// }

// class Bee extends Animal {
//   numLegs = 6;
//   keeper: BeeKeeper = new BeeKeeper();
// }

// class Lion extends Animal {
//   keeper: ZooKeeper = new ZooKeeper();
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c();
// }

// createInstance(Lion).keeper.nameTag;
// createInstance(Bee).keeper.hasMask;
//#endregion

//#region ******************** Generic Parameter Defaults
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-parameter-defaults

// type Container<T,U> = {
//     element: T,
//     children: U;
// }

// // declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
// // declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
// // declare function create<T extends HTMLElement, U extends HTMLElement>(
// //     element: T,
// //     children: U[],
// // ): Container<T, U[]>;

// declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
//     element?: T,
//     children?: U
// ): Container<T,U>;

// const div = create();

// const p = create(new HTMLParagraphElement());

//#endregion

//#region Variance Annotations
//https://www.typescriptlang.org/docs/handbook/2/generics.html#variance-annotations
/*
 This is an advanced feature for solving a very specific problem, and should only be used in situations where you’ve identified a reason to use it

Covariance and contravariance are type theory terms that describe what the relationship between two generic types is. Here’s a brief primer on the concept.

*/
interface Animal {
  name: string;
}

interface Cat extends Animal {
  family: string;
}

interface Producer<T> {
  make(): T;
}

interface Consumer<T> {
  consume: (arg: T) => void;
}

interface AnimalProducer {
  make(): Animal;
}

// A CatProducer can be used anywhere an AnimalProducer is expected/
interface CatProducer {
  make(): Cat;
}

// Contravariant annotation
interface Consumer<in T> {
  consume: (arg: T) => void;
}

// Covariant annotation
interface Producer<out T> {
  make(): T;
}

// Invariant annotation
interface ProducerConsumer<in out T> {
  consume: (arg: T) => void;
  make(): T;
}
// It’s critical to reinforce that variance annotations are only in effect during an instantiation-based comparison. 
// They have no effect during a structural comparison. 
// For example, you can’t use variance annotations to “force” a type to be actually invariant: 

// DON'T DO THIS - variance annotation
// does not match structural behavior
interface Producer<in out T> {
  make(): T;
}
// Not a type error -- this is a structural
// comparison, so variance annotations are
// not in effect
const p: Producer<string | number> = {
  make(): number {
    return 42;
  },
};

// Error, this interface is definitely contravariant on T
/*
Type 'Foo<sub-T>' is not assignable to type 'Foo<super-T>' as implied by variance annotation.
  Types of property 'consume' are incompatible.
    Type '(arg: sub-T) => void' is not assignable to type '(arg: super-T) => void'.
      Types of parameters 'arg' and 'arg' are incompatible.
        Type 'super-T' is not assignable to type 'sub-T'.ts(2636)
*/
// interface Foo<out T> {
//     consume: (arg: T) => void;
//   }
//#endregion
