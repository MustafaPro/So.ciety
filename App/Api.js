var express = require('express')
  , router = express.Router();

router.use('/user', require('./User/Controllers/User.js'));

module.exports = router;
