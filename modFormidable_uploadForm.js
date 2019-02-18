var http = require('http');
//Parse the form from the html to node
var formidable = require('formidable');
// First you need to install the npm package  "formidable" --> npm install formidable
//Fyle System Module to move the file to the folder of your choice
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:\Users\GT910006\Desktop\NodeExercises' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });    
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
                     <form action="fileupload" method="post" enctype="multipart/form-data">
                     <input type="file" name="filetoupload"><br>
                     <input type="submit">
                     </form>  
                 `);

    return res.end();
  }
}).listen(8080);