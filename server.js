var User = require('./user');

function run (){
    var v = new User('v');
    var p = new User('p');

    p.hello(v);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
