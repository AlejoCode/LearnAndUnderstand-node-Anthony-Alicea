
// Let the javascript engine knows that it has to be really picky with the compiling of the code 
'use strict';

// Class from ES6 that works as function Constructor
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // You can add methods to the class by simply putting them in here and they will be automatically attached to the prototype object of this class
    log() {
        console.log('Hello, ' + this.firstName + ' '  + this.lastName);
    }
}

let jhon = new User ('Jhon','Doe');
jhon.log();

let jane = new User ('Jane','Doe');
jane.log();

console.log(jhon.__proto__);

console.log(jane.__proto__);

console.log(jhon.__proto__ === jane.__proto__);