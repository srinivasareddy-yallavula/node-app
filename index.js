// Load the full build.
var _ = require('lodash');

console.log("hii")
var result = _.partition([1, 2, 3, 4], n => n % 2);

console.log(result);

var r1 = _.chunk([1, 2, 3, 4,6,9,2], [size=3])
console.log(r1)
