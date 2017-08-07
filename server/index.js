var express = require('express'); //cargamos express

var app = express();
var server = require('http').Server(app); //al método http le decimos que nuestro servidor va a ser la variable en la cual hemos inicializado express.

var io = require('socket.io').Server(server) //aqui hacemos lo mismo que arriba pero la pasamos la variable server que ya lleva la inicialización de express.

server.listen( '3020', function(){
	console.log("Server is working properly in http:localhost:3020");
});