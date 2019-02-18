let Hackers = {
    realName: '',
    nickName: '',
    greet: function () {
        return this.realName + '(asProgrammer) => ' + this.nickName; 
    }
}

let alejo = Object.create(Hackers);
alejo.realName = 'Daniel Salgado';
alejo.nickName = 'AlejoCode';


let daniel = Object.create(Hackers);
daniel.realName = 'Alejandro Salgado';
daniel.nickName = 'AlejoCode';

console.log(alejo.greet());

console.log(daniel.greet());