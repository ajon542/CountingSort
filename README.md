﻿# CountingSort
Implementation of the counting sort algorithm presented in the MIT "Introduction to Algorithms" course.

## Example

```javascript

var countingSort = require('./countingSort.js');

// Construct input [0, 5], therefore an array of size 6 is needed
// for the temporary storage space.
var input = [2, 5, 3, 0, 2, 3, 0, 3];
var result = [];

// Sort.
countingSort(input, result, 6);

// Print the sorted array.
console.log(result);

```

## Notes and References

* http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/
* Cormen, T. (2009). Introduction to algorithms (3rd ed.). Cambridge, Mass.: MIT Press.



