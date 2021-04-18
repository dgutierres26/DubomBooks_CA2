var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    genre: String,
    title: String,
    author: String,
    publisher: String,
    price: Number
    
},
{ timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);