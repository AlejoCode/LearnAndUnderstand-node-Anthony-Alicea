
function greet(callback) {
    console.log('Helloo');
    let data = {
        name: 'Alejo'
    }
    callback(data);
};

greet(function(data) {
    console.log('The callback was invoked !');
    console.log('Triggered by: ' + data.name);

});

greet(function(data) {
    console.log('We invovked the function greet again with another function as parameter that will console.log() this message !')
    console.log('Triggered by: ' + data.name);

})