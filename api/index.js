var express = require('express')
  , router = express.Router();

router.use('/user', require('./user/routes/user.js'));

module.exports = router;
