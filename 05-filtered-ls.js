var fs = require('fs');
var path = require('path')

var p = process.argv[2]
var fileExtension = '.' + process.argv[3]

fs.readdir(p, function(err, files){
    files
        .filter(function(file){
            // return file.includes(fileExtension)
            return path.extname(file) === fileExtension;
        })
        .forEach(function(file){
            console.log(file)
        })
})
