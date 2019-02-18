// Objects properties and methods
let obj = {
    greet: 'Hello'
}
console.log('-- Logging the obj{} --');
console.log(obj);
console.log('-- Logging the property .greet from obj{} --');
console.log(obj.greet);
console.log('-- Logging a dinamyc property from obj{} with the variable called prop that has inside the text = "greet"  --');
let prop = 'greet';
console.log(obj[prop]);

// Functions and arrays 

let array = [];
array.push(function() {
    console.log('This is the first item in the array');
});
array.push(function() {
    console.log('This is the second item in the array');
});
array.push(function() {
    console.log('This is the third item in the array');
});
console.log('-- Iterate through the array with a ForEach and runs the function inside each item --');
array.forEach(function(item) {
        item();
});