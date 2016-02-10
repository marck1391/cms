var fs = require('fs')
var path = require('path')
var controllers = {},
	files = fs.readdirSync(__dirname)

files.forEach(function(file){
	var data = path.parse(file)
	var ext = data.ext
	var name = data.name

	if(ext=='.js'&&name!='index'){
		controllers[name] = require('./'+file)
	}
})

module.exports = controllers