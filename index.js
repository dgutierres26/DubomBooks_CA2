const express = require ('express'),
morgan = require ('morgan'),
cors = require('cors'),
axios = require('axios'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(require('./routes'));


app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = "mongodb+srv://diego:imgood12021985@cluster0.bpddp.mongodb.net/dubombooks?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('MongoDB is successfully connected'))
        .catch((err) => console.log(err));
