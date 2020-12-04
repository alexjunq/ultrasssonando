var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log('app listening on port '+port);

});