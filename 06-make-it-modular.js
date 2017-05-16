var myModule = require('./my-module');

var pathQuery = process.argv[2];
var extQuery = process.argv[3];

myModule(pathQuery, extQuery, function(err, aFilteredFiles) {
	if (err) throw err;
	aFilteredFiles.forEach(function(file) {
		console.log(file);
	})
})
