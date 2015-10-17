var express = require('express')
  , Api = require('../../Core/Helpers/Api')
  , Security = require('../../Core/Helpers/Security')
  , User = express.Router();

User.get('/', function(req, res) {
  res.json({name: 'Sam Granger'});
});

User.post('/authenticate', function(req, res) {
  var authenticate = Api.request({ endpoint: '/user/authenticate', method: 'post', bearer: false}, { username: req.params.username, password: req.params.password});
});

module.exports = User;
