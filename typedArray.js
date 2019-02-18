//create a buffer array of 8 bits
let buffer = new ArrayBuffer(8);
// create a array of integers of 32 bits that will have two fields because it is giving the buffer 
let view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;

console.log(view);