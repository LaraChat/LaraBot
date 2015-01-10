var request = require("request");

exports.docsSome = function (version, cb) {
    console.log(this.message);

    var url = "http://laravel.com/docs/";

    if (this.message.words[1] !== undefined) {
        url = url + this.message.words[1] + "/";
    }
    if (this.message.words[2] !== undefined) {
        url = url + this.message.words[2] + "#";
    }
    if (this.message.words[3] !== undefined) {
        url = url + this.message.words[3];
    }
    cb(null, url);
}

exports.docsMost = function (version, main, cb) {
    console.log(this.message);

    var url = "http://laravel.com/docs/";

    if (this.message.words[1] !== undefined) {
        url = url + this.message.words[1] + "/";
    }
    if (this.message.words[2] !== undefined) {
        url = url + this.message.words[2] + "#";
    }
    if (this.message.words[3] !== undefined) {
        url = url + this.message.words[3];
    }
    cb(null, url);
}

exports.docsFull = function (version, main, sub, cb) {
    console.log(this.message);

    var url = "http://laravel.com/docs/";

    if (this.message.words[1] !== undefined) {
        url = url + this.message.words[1] + "/";
    }
    if (this.message.words[2] !== undefined) {
        url = url + this.message.words[2] + "#";
    }
    if (this.message.words[3] !== undefined) {
        url = url + this.message.words[3];
    }
    cb(null, url);
}