var Book = require('./models/book')

exports.createBook = function(req, res) { 
    var newbook = new Book(req.body);
    newbook.save(function (err, book) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(book); 
});
};

exports.getBooks = function(req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};