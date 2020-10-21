var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render('medical-alt');
});

app.listen(port, function() {
  console.log('app listening on port '+port);

});