var express = require('express');
var app = express();
var listaUser = [];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
    res.send(listaUser);
  });

  app.post('/user', function (req, res) {
    listaUser.push(req.body);
    res.status(200).json({
        listaUser
    });
    listaUser = [
        {id:0}
    ]
  });

  app.get('/user/:id', function(req, res){
    const user = listaUser.find(us => us.id == req.params.id);
    res.json({
        id: 0
    });
});


app.delete('/user/:id',function(req, res){
    const user = listaUser.find(us => us.id == req.params.id);
    if(user){
        res.status(202).json({
            message: "Si existe el usuario",
            user
        });
        listaUser.pop();
    }else{
        res.status(204).json({
            message: "No existe el usuario"
        });
    }
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });