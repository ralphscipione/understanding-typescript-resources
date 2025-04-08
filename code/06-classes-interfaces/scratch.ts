/*
 * JS class declaration below - JS and TS
 */
// class User {
//     name : string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// /*
//  * Equivalent TS class declaration below.
//  */
// class MyUser {

//     constructor(public name: string, public age: number) {}
// }

// const user1 = new MyUser('Ralph',58);
// const user2 = new MyUser('Bob', 59);

// console.log(user1);
// console.log(user2);

// ////////////////////////////////////////
// class MyUser {
//     constructor(private firstName: string, private lastName: string) {}

//     get fullName():string  {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const user1 = new MyUser('John', 'User');
// console.log(user1.fullName);

interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticateableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}

class AuthenticateableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login(): void {
    //
    console.log(`${this.email} is logged in`);
  }

  logout(): void {
    //
    console.log(`${this.email} is logged out`);
  }
}

let user1: Authenticatable;
user1 = {
  email: "test@example.com",
  password: "abc123",
  login() {
    // logic to check database or other service
    // set isLoggedIn = true;
  },
  logout() {
    // set isLoggedIn = false;
    // clear session
  },
};

let user2 = new AuthenticateableUser('test@test.com', 'test123');
user2.login();
user2.logout();