console.log("MAIN JS LOADED.");

var socket = io.connect(/*url del socket/app*/'http://192.168.0.180:3020', { 'forceNew': true });

//recibimos el evento mensajes emitido desde el servidor
socket.on('messages', function(data){
	console.log(data);
	renderMessages(data);
});

function renderMessages(data){
	var html = data.map( function(message, index){
		return(`
			<div class="message">
				<strong>${ message.nickName }</strong> said:
				<p>${ message.text }</p>
			</div>
		`);
	}).join(' ');

	document.getElementById('messages').innerHTML = html;
}