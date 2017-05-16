var http = require('http');

var urlQuery = process.argv[2];

http.get(urlQuery, function(response){
	response
		.setEncoding('utf8')
		.on("data", console.log)
		.on("error", console.error)
})
