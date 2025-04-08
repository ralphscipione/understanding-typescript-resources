"use strict";
/*
 * JS class declaration below - JS and TS
 */
// class User {
//     name : string;
//     age: number;
class AuthenticateableUser {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login() {
        //
        console.log(`${this.email} is logged in`);
    }
    logout() {
        //
        console.log(`${this.email} is logged out`);
    }
}
let user1;
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
