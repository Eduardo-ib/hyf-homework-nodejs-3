var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function(req,res){
  res.send(users)
})

app.get('/user/:id',function(req,res){
  const user = users.find(us => us.id == req.params.id);
    res.json({
        id: 0
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });