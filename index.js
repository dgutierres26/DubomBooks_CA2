require('dotenv').config();

const express = require ('express'),
morgan = require ('morgan'),
cors = require('cors'),
axios = require('axios'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var port = 8000;
app.set('view engine', 'ejs')


app.use(function(req, res, next){
    res.locals.path = req.path
    next()
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/books', require('./routes'));
app.get('/', function(req, res){
    res.redirect('/books')
});

app.listen(process.env.PORT || port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = process.env.MONGO_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('MongoDB is successfully connected'))
        .catch((err) => console.log(err));
