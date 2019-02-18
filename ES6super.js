'use strict';
let EventEmitter = require ('events');

class Greetr extends EventEmitter {
    constructor() {
        // This function is saying that all the prototype object from EventEmitter will be available in Greetr
        super();
        this.greeting = 'Hello World !';
    }

    greet(data) {
        console.log(
            ` 
                ${this.greeting}   |   DoneBy : ${data}
            ` 
        );
        this.emit('greet', data);
    }
}

let greeter1 = new Greetr();

greeter1.greet('Alejoo');

