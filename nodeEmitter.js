let Emitter = require('events');
let emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Somewhere, someone triggered the emitter.')
});

emtr.on('greet', () =>  {
    console.log('A greeting occurred!!!')
});

console.log('-- Manually trigger the Emitter.emit("greet")  --');
emtr.emit('greet');