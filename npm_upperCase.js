var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);

//First you have to install the npm package upper case with the next command line
//npm install upper-case
// Try putting the url http://localhost:8080
