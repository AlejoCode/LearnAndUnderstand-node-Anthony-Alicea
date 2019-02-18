
// Let the javascript engine knows that it has to be really picky with the compiling of the code 
'use strict';

a = 3;

function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
User.prototype.log = function () {
    console.log('Hello, ' + this.firstName + ' '  + this.lastName);
}
let jhon = new User ('Jhon','Doe');
jhon.log();

let jane = new User ('Jane','Doe');
jane.log();

console.log(jhon.__proto__);

console.log(jane.__proto__);

console.log(jhon.__proto__ === jane.__proto__);