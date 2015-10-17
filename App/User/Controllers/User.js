var express = require('express')
  , Api = require('../../Core/Helpers/Api').Api
  , Security = require('../../Core/Helpers/Security').Security
  , User = express.Router();

User.get('/', function(req, res) {
  var api = new Api();
  var me = api.request({ endpoint: '/users/me', method: 'get', body: req.params }, function(response, error) {
    if(error) {
      res.status(error.statusCode).json(error);
    } else {
      res.json(response);
    }
  });
});

User.post('/authenticate', function(req, res) {
});

module.exports = User;
