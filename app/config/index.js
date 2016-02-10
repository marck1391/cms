module.exports = {
	ip: '0.0.0.0',
	port: process.env.PORT || 3000,
	environment: process.env.NODE_ENV || 'dev',
	db: process.env.DB_URL
}