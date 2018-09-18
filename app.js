var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello World! 666');
  console.log("Got request");
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
