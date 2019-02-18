let EventEmitter = require('events');
let util = require('util');
let dt = new Date();


function SyncLogger() {
    this.logging = "Last Sync: " + dt.getDate() + "/"
    + (dt.getMonth()+1)  + "/" 
    + dt.getFullYear() + " @ "  
    + dt.getHours() + ":"  
    + dt.getMinutes() + ":"
    + dt.getSeconds();
}

function SalesDiscount() {
    this.percentage = 0.2;
    this.discounting = 'Discount made of ' + this.percentage *100 + '% ';
}

util.inherits(SyncLogger, EventEmitter);

util.inherits(SalesDiscount, EventEmitter);


SyncLogger.prototype.log = function() {
    console.log(this.logging);
    this.emit('log');
}

SalesDiscount.prototype.discount = function(name, price) {
    console.log(this.discounting);
    this.emit('discount', name, price);
};

let syncLogger1 = new SyncLogger();

let salesDiscount1 = new SalesDiscount();

syncLogger1.on('log', function() {
    console.log('Someone Syncronized the page !');
});

salesDiscount1.on('discount', function(name, price) {
    console.log('For te customer ' + name + ' with the price ' + price + ' Therefore the final price will be : ' + (price - (price * this.percentage)));
});

syncLogger1.log();

salesDiscount1.discount('Alejo',1000);