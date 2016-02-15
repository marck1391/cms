var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

config = require('./app/config')
session = require('./app/services/session');

//autoload helpers, libraries, models, services
//env vars
app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(config.session.secret))
app.use(session());
app.set('view engine', config.views.engine)
app.set('views', config.views.path)
app.use(config.server.public_route, express.static(config.server.public_path));

server = app.listen(config.server.port, function(){
	console.log('Server started')
});
require('./app/services/ws')
require('./app/main')