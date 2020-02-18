var express = require('express');
var app = express();
var listaUser = [];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
    res.send(listaUser);
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });