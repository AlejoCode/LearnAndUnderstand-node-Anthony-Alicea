let Emitter = require('./emitter');
let eventConfig = require('./configMod').events;
let emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone triggered the emitter.')
});

emtr.on(eventConfig.FILEOPENED, () =>  {
    console.log('Somewhere, someone opened the file!!!')
});

emtr.on(eventConfig.FILESAVED, () =>  {
    console.log('Somewhere, someone saved the file!!!')
});

console.log('-- Manually trigger the Emitter.emit(eventConfig.GREET)  --');
emtr.emit(eventConfig.GREET);


console.log('-- Manually trigger the Emitter.emit(eventConfig.FILEOPENED)  --');
emtr.emit(eventConfig.FILEOPENED);


console.log('-- Manually trigger the Emitter.emit(eventConfig.FILESAVED)  --');
emtr.emit(eventConfig.FILESAVED);