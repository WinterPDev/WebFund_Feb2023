var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
];

// Use https://pythontutor.com/javascript.html#mode=edit if you would like to visualize the nested for loops!

// We select parts of an array via the index.
// When accessing nested arrays, we'll need more than 1 index.

// console.log(arr2d[1][1])

// for (var i = 0; i < arr2d.length; i++) {
//     console.log(arr2d[i]);
//     for (var j = 0; j < arr2d[i].length; j++) {
//         console.log(arr2d[i][j])
//     }
// }

// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

