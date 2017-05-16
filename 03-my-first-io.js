var fs = require('fs');

var fileName = process.argv[2];
var fileContent = fs.readFileSync(fileName, 'utf8');
var numberOfLines = fileContent.split('\n').length-1;

console.log(numberOfLines);
