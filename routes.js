const express = require('express'),
router = express.Router();

var bookCtrl = require('./book-controller');

router.get('/books', bookCtrl.getBooks);
router.post('/books', bookCtrl.createBook);


module.exports = router;
