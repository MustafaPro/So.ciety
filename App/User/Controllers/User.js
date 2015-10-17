var express = require('express')
  , User = express.Router();

User.get('/', function(req, res) {
  res.json({name: 'Sam Granger'});
});

module.exports = User;
