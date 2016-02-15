var router = require('express').Router()

router.get('/', function(req, res) {
	res.render('home', {
		title: 'Hello world!',
		logedIn: req.session.user!=null,
		user: req.session.user
	})
})

module.exports = router