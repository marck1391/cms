var fs = require('fs')
var controllers = {},
	files = fs.readdirSync(__dirname),
	name,
	ext

files.forEach(function(file){
	ext = file.substr(file.length-2, file.length)
	name = file.substr(0, file.length-3)

	if(ext=='js'&&name!='index'){
		controllers[name] = require('./'+file)
	}
})

module.exports = controllers