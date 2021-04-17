const express = require('express'),
router = express.Router();

var bookCtrl = require('./book-controller');

router.get('/', bookCtrl.getBooks);
router.post('/', bookCtrl.createBook);
router.delete('/', bookCtrl.deleteBook);

module.exports = router;
