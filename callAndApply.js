let obj = {
    name: 'Alejandro Salgado',
    greet: function() {
        console.log(
            `
                Hello ${this.name}
            `
        );
    }
}
console.log(
    `
    //triggers the .greet() function inside the obj{} and display the name that the property this.name has
    obj.greet();
    `
);
obj.greet();
console.log(
    `
    //triggers the .greet() with a extra function .call() 
    //that recieves an extra parameter that will overwrites 
    //What the .this object has, in this case we changed 
    //The object to {name:'AlejoCode'}
    obj.greet.call({name:'AlejoCode'});

    `
);
obj.greet.call({name:'AlejoCode'});


