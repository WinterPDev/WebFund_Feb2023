var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!

// How do we check if it's positive? 
// We can check if the values are greater than 0. 

// We'll need a loop to go through the array.
// We'll need a conditional to check the value for if it's positive.


console.log("there are " + countPositives + " positive values");


/*

Bonus Challenge: 
Level 1: Write this as a function that accepts arrays as parameters.
Level 2: Include a return statement that gives back the counted positive numbers.
Level 3: Instead of returning the count, return a new array of only the positive numbers.

*/


// v ===================================================== SOLUTIONS ================================================================= v

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!

// How do we check if it's positive? 
// We can check if the values are greater than 0. 

// We'll need a loop to go through the array.
// We'll need a conditional to check the value for if it's positive.

function positiveNum(arr, countPositives) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] > 0)
            countPositives++;
    return countPositives;
}

countPositives = positiveNum(numbers, countPositives);

console.log("there are " + countPositives + " positive values");

function retArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++)
        if (arr[i] > 0)
            newArr.push(arr[i])
    return newArr;
}

numbers = retArr(numbers)

console.log("Possitive array: " + numbers);

/*

Bonus Challenge: 
Level 1: Write this as a function that accepts arrays as parameters.
Level 2: Include a return statement that gives back the counted positive numbers.
Level 3: Instead of returning the count, return a new array of only the positive numbers.

*/

/**
 * traverse, go through -> write a loop to go through array
 * write something as a function -> put code in a declare function
 */


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
var positiveNumbers = [];

function stayPositive(myArr) {
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > 0) {
            positiveNumbers.push(myArr[i]);
            countPositives++;
        }
    }
}



stayPositive([3, 4, -2, 7, 16, -8, 0]);
console.log(positiveNumbers);
console.log("there are " + countPositives + " positive values");