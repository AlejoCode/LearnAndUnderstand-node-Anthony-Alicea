var fs = require('fs');

fs.writeFile('replacedFile.txt', 'This is my text replaced awjdwdbh1111', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

//The fs.writeFile() method replaces the specified file and content:

