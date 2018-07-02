var express = require('express')
  , router = express.Router();
  
router.use('/developers', require('./developers'));
  
module.exports = router;