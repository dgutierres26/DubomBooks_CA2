const express = require ('express'),
morgan = require ('morgan'),
cors = require('cors'),
axios = require('axios'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json());

app.get('/hello/:foo/:bar', (req, res) => {
  res.json({message: 'Hello BScBest!', data: [
    req.params.foo,
    req.params.bar
]});
});

//  app.use(express.json());
//  app.use(express.urlencoded({ extended: true }));
//  app.use(morgan('dev'));

// app.use(require('./routes'));

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});
