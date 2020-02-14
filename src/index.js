const express = require('express');
const request = require('request');
const app = express();

var listaUsers =[];

app.get('/',function(req, res) {
    res.send('Hello World!');
});

app.post('/user',function(req, res){
    listaUsers.push(req.body);
        res.status(200).json({
            listaUsers
    });
    listaUsers = [{id:0}]  
});
app.get('/users', function(req, res){
    res.json(listaUsers);
});

app.get('/user/:id', function(req, res){
    const user = listaUsers.find(us => us.id == req.params.id);
    res.json({
        id: 0
    });
});

app.listen(3000, function() {
    console.log("server is running");
});