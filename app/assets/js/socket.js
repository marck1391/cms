var socket = io()

socket.on('message', function(msg){
	console.log('message', msg)
})