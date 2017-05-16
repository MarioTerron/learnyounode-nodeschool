var http = require('http');
var async = require('async');
var bl = require('bl');
var aUrls = process.argv.slice(2);

var httpGets = aUrls.map(function(url) {
	return function(callback) {
		http.get(url, function(response) {
			response.pipe(bl(function(err, data) {
				data = data.toString();
				callback(null, data);
			}))
		})
	}
})
async.series(httpGets, function(err, aResults) {
	aResults.forEach(function(item){
		console.log(item);
	})
})
