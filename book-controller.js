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
    
    res.render('index', {data: books})
  }); 
};

exports.deleteBook = function(req, res){
    const array = req.body
      if(array){
        console.log('===============================================')
        for(let i = 0; i < array.length; i++){
             console.log(array[i])
            
        }
        
       
    }
    res.json('successful')
};

// exports.deleteBook = function(req, res) {
//   Book.findByIdAndRemove({_id: req.params.id}, function (err, books) {
//     if (array) {
//       res.status(400).json(err); 
//     } 
//     res.json(books);
//   }); 
// };