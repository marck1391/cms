var router = require('express').Router()

router.get('/', function(req, res) {
	req.session.destroy(function(err){
		res.redirect('/')
	})
})

module.exports = router