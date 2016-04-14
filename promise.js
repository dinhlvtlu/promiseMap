/**
 * Created by dinhlv on 4/13/16.
 */

var promise = require("bluebird");
var processData = process.argv;
var value = processData[2];

if(!value)
{
    console.log("NULL")
}
else {
    var numbers = value.match(/\d+/ig);
    console.log("Array numbers = ", numbers);
    var arrResult = [];
    promise.map(numbers, function(number){
        number = parseFloat(number);
        number = Math.pow(number,2);
        arrResult.push(number);
    });
    console.log(arrResult);
}
