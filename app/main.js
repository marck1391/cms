var request = require('request')

controllers = require('./controllers')
routes = require('./routes')

app.use(function (req, res, next) {
	next()
})

routes.forEach(function(i){
	if(i.route!=''&&controllers[i.controller]){
		app.use(i.route, controllers[i.controller])
	}
})

app.use(function (req, res, next) {
	var err = new Error('Not found')
	err.status = 404
	next(err)
})

app.use(function (err, req, res, next) {
	res.status(err.status || 500)
	res.render ('errors/default', {
		status: err.status,
		title: err.name,
		message: err.message,
		stack: err.stack
	})
})
