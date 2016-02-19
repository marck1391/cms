var Session = require('express-session')
var RedisStore = require('connect-redis')(Session);
var MemoryStore = Session.MemoryStore

SessionStorage = {}

module.exports = function(){
	if(config.session.type=='redis'){
		SessionStorage = new RedisStore(config.session.redis)
	}else{
		SessionStorage = new MemoryStore()
	}

	return Session({
		secret: config.session.secret,
		cookie: { maxAge: config.session.cookie.maxAge },
		store: SessionStorage,
		resave: false,
		saveUninitialized: true
	})
}