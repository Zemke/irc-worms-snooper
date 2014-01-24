var express = require('express');
var app = express();
var port = Number(process.env.PORT || 5000);

var environment = require('./config/environment')(app, express, port);
var controller = require('./controller');
var routes = require('./config/routes')(app);

var server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});

var snooper = require('./util/snooper')(server);