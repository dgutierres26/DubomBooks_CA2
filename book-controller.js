var mongoose = require('mongoose');
var Book = require('./models/book')

exports.updateBook = function(req, res) { 
    const { genre, title, author, publisher, price } = req.body
    const {id} = req.body
    console.log({ genre, title, author, publisher, price })
    var newbook = new Book({ genre, title, author, publisher, price });
    mongoose.model('Book').findByIdAndUpdate(id, { genre, title, author, publisher, price }, function (err, book) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(book); 
        // res.redirect('/');
});
};

exports.createBook = function(req, res) { 
    var newbook = new Book(req.body);
    newbook.save(function (err, book) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(book); 
        // res.redirect('/');
});
};

exports.getBooks = function(req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    
    res.render('index', {data: books})
  }); 
};

exports.deleteBook = function(req, res){
    const array = req.body
     Book.findByIdAndRemove(array, function (err, books) {
      if(array){
        console.log('===============================================')
        for(let i = 0; i < array.length; i++){
             console.log(array[i])
       
            
        }
        
       
    }
    res.json('successful');
    
    });
};
