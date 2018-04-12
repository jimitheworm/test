var log = require('./logger')(module);
var db = require('./db');
db.connect();

var User = require('./user');

function run (){
    var v = new User('vqw');
    var p = new User('p');

    p.hello(v);
    log(1, 2);
}

if (module.parent) {
    exports.run = run;
} else {
    console.log('server');
    run();
}
