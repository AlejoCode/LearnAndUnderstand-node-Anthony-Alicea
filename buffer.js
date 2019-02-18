let buf = new Buffer('This will be encoded in utf8 or in the encoding specified in the second parameter', 'utf8');
console.log('console.log(Buffer);');
console.log(buf);
console.log('console.log(Buffer.toString());');
console.log(buf.toString());
console.log('console.log(Buffer.toJSON());');
console.log(buf.toJSON());

