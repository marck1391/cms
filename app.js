var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var mongoose = require('mongoose')

config = require('./app/config')

mongoose.connect(config.db, function(err){
	if(err) console.log('DB Error')
})
//sessions
//mw sess ws
//autoload helpers, libraries, models, services
//env vars
app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', __dirname + '/app/views')
app.use('/assets', express.static(__dirname + '/app/assets'));

var server = app.listen(config.port, function(){
	console.log('Server started')
});

require('./app/main')