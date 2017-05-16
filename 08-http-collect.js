var http = require('http');
var bl = require('bl');

var urlQuery = process.argv[2];
var readStream = ''

// Way 1
// http.get(urlQuery, function(response){
// 	response
// 		.setEncoding('utf8')
// 		.on("data", function (chunk) {
// 			readStream += chunk
// 		})
// 		.on("end", function () {
// 			console.log(readStream.length)
// 			console.log(readStream);
// 		})
// 		.on("error", console.err)
// })

// Way 2
var accWriteStream = bl(function (err, wholeContent) {
  wholeContent = wholeContent.toString()
  console.log(wholeContent.length)
  console.log(wholeContent)
})

http.get(url, function (response) {
  response.pipe(accWriteStream)
})
