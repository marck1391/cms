var router = require('express').Router()

router.get('/', function(req, res) {
	res.render('login', {title: 'Login', logedIn: false})
})

router.post('/', function(req, res) {
	req.session.user = req.body.username
	res.redirect('/')
})

module.exports = router