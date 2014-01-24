var fs = require('fs')

var getthestuff = fs.readFile(process.argv[2], 'utf8', function(err, data){
	if (err){
		console.log(err)
	}
	
	console.log(data.toString().match(/\n/g).length)
})
