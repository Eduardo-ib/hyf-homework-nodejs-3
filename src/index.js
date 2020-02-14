const express = require('express');
const request = require('request');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var listUsers =[];

app.get('/',function(req, res) {
    res.send('Hello World!');
});

app.post('/user',function(req, res){
    listUsers.push(req.body);
        res.status(200).json({
            listUsers
    });
    listUsers = [
        {id:0}
    ]
    //console.log(listUsers);
});
app.get('/users', function(req, res){
    res.json(listUsers);
    //console.log(listUsers);
});

app.get('/user/:id', function(req, res){
    const user = listUsers.find(us => us.id == req.params.id);
    res.json({
        id: 0
    });
});

app.delete('/user/:id',function(req, res){
    const user = listUsers.find(us => us.id == req.params.id);
    if(user){
        res.status(202).json({
            message: "Si existe el usuario",
            user
        });
        listUsers.pop();
    }else{
        res.status(204).json({
            message: "No existe el usuario"
        });
    }
});

app.listen(3000, function() {
    console.log("server is running");
});