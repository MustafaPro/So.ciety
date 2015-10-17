var express = require('express')
  , router = express.Router();

router.use('/user', require('./user/controllers/user.js'));

module.exports = router;
