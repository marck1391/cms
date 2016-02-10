var router = require('express').Router()

router.get('/', function(req, res) {
	res.render('home', {hello: 'Hello world!'})
})

module.exports = router