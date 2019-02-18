let fs = require('fs');
console.log('Synscronously');
//Syncronous way of loading a file in a variable, it load a buffer with the data and then pass it to the variable
let catalogSync = fs.readFileSync(__dirname + '/catalog.txt');
console.log(catalogSync.toString());
console.log('Asynscronously will readFile');
//Asyncronously way of loading a file into a variable with a error-first callback that let the engine knows when the file was loaded so the engine can do other stuff while that work is completed 
let catalogAsync = fs.readFile(__dirname + '/catalog.txt',
    function(err, data) {
        console.log('The file is done loading !');
        console.log(data.toString());
    }
);
console.log('The Javascript engine read all the lines');
