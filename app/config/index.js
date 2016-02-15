global.DOCUMENT_ROOT = process.env.PWD

module.exports = {
	environment: process.env.NODE_ENV || 'dev',
	server: {
		host: '0.0.0.0',
		port: process.env.PORT || 3000,
		public_route: '/assets',
		public_path: DOCUMENT_ROOT + '/app/assets'
	},
	db: process.env.DB_URL,
	session: require('./session'),
	views: require('./views')
}