var phrases;

exports.connect = function() {
    phrases = require('./ru');
};

exports.getPhrase = function(name) {
    if (!phrases[name]) {
        throw new Error('что за фигня ' + name);
    }
    return phrases[name];
};