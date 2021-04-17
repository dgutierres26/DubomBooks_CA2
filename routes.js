const express = require('express'),
router = express.Router();

var bookCtrl = require('./book-controller');

router.get('/hello', bookCtrl.getWorld);

router.get('/hello/:foo/:bar', bookCtrl.getWorldParams);

router.post('/hello', bookCtrl.postWorld);


module.exports = router;
