let util = require ('util');

function Programmer() {
    this.firstName = 'Alejandro',
    this.lastName = 'Salgado'
}

Programmer.prototype.greet = function() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
};

function DevOps() {
    // Super function to get all the properties from Programmer inside this new object
    Programmer.call(this);
    this.deployment = true;
    this.abstracting = true;
}

util.inherits(DevOps, Programmer);

let AlejoCode = new DevOps();
console.log(AlejoCode);
AlejoCode.greet();