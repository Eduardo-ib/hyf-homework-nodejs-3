var express = require('express');
var app = express();

//var users=[];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

pp.post('/user', function(req,res){
  users.push(req.body)
  res.status(200).json({
    users
  })
  users = [{id:0}] 
})

app.get('/users', function(req,res){
  res.send(users)
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });