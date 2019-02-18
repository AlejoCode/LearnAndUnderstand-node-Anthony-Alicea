//This is a function expression that it's being immediately invoked
(function(){
    let firstName = 'Jhon';
    console.log(firstName);
}());

// this one has a parameter for the lastname
(function(lastName){
    let firstName = 'Jhon';
    console.log(firstName + ' ' +lastName );

}('Doe'));

let firstName = 'Jane';
console.log(firstName);