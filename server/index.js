
//carga de librerías
var express = require('express'); //cargamos express

var app = express();
var server = require('http').Server(app); //al método http le decimos que nuestro servidor va a ser la variable en la cual hemos inicializado express.

var io = require('socket.io')(server) //aqui hacemos lo mismo que arriba pero la pasamos la variable server que ya lleva la inicialización de express.

//GET
app.get('/', function(req, res){
	res.status(200).send("Welcome to the nodeJS Server");
});

server.listen( 3020, function(){
	console.log("Server is working properly in http:localhost:3020");
});