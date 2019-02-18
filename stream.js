let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/lorem.txt');

let writable = fs.createWriteStream(__dirname + '/loremcopy.txt');

//make a pipe between the readable to the writable
// readable.on('data', function (chunk) {
//     console.log('chunk.length :' + chunk);
//     writable.write(chunk);
//     //console.log(chunk.toString());
// });

let compressed = fs.createWriteStream(__dirname + '/lorem.txt.gz')
let gzip = zlib.createGzip();

//Make the same pipe derectly
readable.pipe(writable);

//read from readable to chain the pipe to gzip and after chain the pipe to compressed
readable.pipe(gzip).pipe(compressed);

console.log("readable");
console.log(readable);
console.log("---------");

console.log("writable");
console.log(writable);
console.log("---------");

console.log("compressed");
console.log(compressed);
console.log("---------");

console.log("gzip");
console.log(gzip);
console.log("---------");