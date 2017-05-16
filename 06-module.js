var fs = require('fs');
var path = require('path')

function myModule(pathDir, extFile, callback) {
	fs.readdir(pathDir, function(err, files) {
		if (err) return callback(err);
		var filteredFiles = files.filter(function(file) {
			return path.extname(file) === '.' + extFile;
		})
		callback(null, filteredFiles);
	})
}
module.exports = myModule
