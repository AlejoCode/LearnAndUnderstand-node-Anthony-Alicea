var url = require('url');
var util = require('util');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('FunParse.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<html>
        <body>
        <h1>Host:</h1>
        <h3>${q.host}</h3>
        <h1>Path Name:</h1>
        <h3>${q.pathname}</h3>
        <h1>Search:</h1>
        <h3>${q.search}</h3>
        <p>Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:</p>
        </body>
        </html>`);
    res.end();
  });
}).listen(8080);

var name = 'AlejoCode';

var greeting = util.format('Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties, %s' , name);

util.log(greeting);