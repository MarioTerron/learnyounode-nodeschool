var fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, 'utf8', function(err, fileContent){
    var numberOfLines = fileContent.split('\n').length-1;
    console.log(numberOfLines);
});
