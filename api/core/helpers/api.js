'use strict';

var rp = require('request-promise');

var Api = function() {
  this._apiBaseUrl = 'https://ciety.com/api';
  var options = options || function(){};
};

Api.prototype.request = function(options, callback) {
  var self = this;

  var request = {
    method: options.method,
    uri: this._apiBaseUrl + options.endpoint,
    body: options.body,
    json: true
  };

  return rp(request).then(function (response) {
    console.info(response);
    callback(response);
  })
  .catch(function (error) {
    // API call failed... 
    callback(null, error);
  });
};

exports.Api = Api;
