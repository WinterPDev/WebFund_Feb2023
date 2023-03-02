const developer = 'You';

/*
Write a function that takes in an array and a number of steps to shift the values to the **right** by. 
Then wrap-around any values to that shift off array's end to the other side so no data is lost.

Example Function Call: rotateArray(arr, 2)
Expected Output: [3, 4, 1, 2]

*/

const arr = [1, 2, 3, 4];

function rotateArray(arr, shiftBy) {
    let newArr = [];
    for (let i = 0; i < shiftBy; i++) {
        arr.unshift(pop());
    }
    // Code Here ＼(ﾟｰﾟ＼)

    return newArr; // Can also do this in place and return arr if you want an additional challenge!
}

console.log(rotateArray(arr, 2))


// Bonus Challenge: Allow the ShiftBy to be a negative value to shift left, or a positive value to shift right.




// Refresher links from a past Array algo challenge! ----v
/*
More info about Array Functions!

Add a value to the end of an array.
push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Remove the value at the end of the array (returns the popped value!)
pop(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

Add a value to the front of an array.
unshift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

Remove the value at the front of an array (returns the shifted value!)
shift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

*/