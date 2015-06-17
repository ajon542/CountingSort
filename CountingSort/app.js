
// Counting sort algorithm.
// a: input array.
// b: output sorted array.
// k: temporary working storage size.
function CountingSort(a, b, k) {
    var c = [];
    
    for (var i = 0; i < k; ++i) {
        c[i] = 0;
    }

    for (var j = 0; j < a.length; ++j) {
        c[a[j]]++;
    }

    for (var i = 1; i < k; ++i) {
        c[i] = c[i] + c[i - 1];
    }

    for (var j = a.length - 1; j >= 0; --j) {
        b[c[a[j]]] = a[j];
        c[a[j]]--;
    }
}

var a = [2, 5, 3, 0, 2, 3, 0, 3];
var b = [];
CountingSort(a, b, 6);
console.log(b);
