//requiring NPM modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//requiring local modeles
var configs = require('./config');

// Uncomment the following lines to start logging requests to consoles.
// app.use(morgan('combined'));
// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());


// serve client side code.
app.use('/',express.static('client'));

app.get('/category.html');
//Finally starting the listener
app.listen(configs.applicationPort, function () {
  console.log('Example app listening on port '+configs.applicationPort+'!');
});
