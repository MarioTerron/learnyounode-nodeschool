process.argv.splice(0,2);

var total = process.argv.reduce(function(acc, currentNumber){
    return acc + parseInt(currentNumber)
},0)
console.log (total)
