const express = require ('express'),
morgan = require ('morgan'),
cors = require('cors'),
axios = require('axios'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(require('./routes'));

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});
