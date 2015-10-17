'use strict';

var crypto = require('crypto');

var Security = function() {
	//options = options || function(){};
};

Security.prototype.encryptText = function(input, password) {
  return new Promise(function(resolve, fail) {
    var cipher = crypto.createCipher('aes-256-cbc', password);
  });
};

Security.prototype.decryptText = function(input, password) {
};

exports.Security = Security;
