var countingSort = require('./countingSort.js');

var a = [0, 2, 5, 3, 0, 2, 3, 0, 3];
var b = [];
countingSort(a, b, 6);
console.log(b);
