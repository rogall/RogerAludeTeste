const express = require('express');
const app = express();
var path = require('path');

app.set('port', process.env.PORT || 3001);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Habilitar quando desenvolver o projeto web
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));

exports.server = app.listen(app.get('port'), () => {
    console.log('App is running on http://localhost:%d in %s mode', app.get('port'), app.get('env'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var stackController = require("./controllers/stack.controller");

app.post('/api/push', stackController.push);
app.post('/api/pop', stackController.pop);
app.get('/api/peek', stackController.peek);
app.get('/api/smaller', stackController.smaller);
app.get('/api/bigger', stackController.bigger);
app.get('/api/stack', stackController.getStack);