
function reverseArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop())
    }
    return arr;
}

var arr = [1, 2, 3, 4, 5]

var result = reverseArr(arr)
console.log(result);


function reverseArr2(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        let right = arr.length - 1 - i;
        arr[i] = arr[right];
        arr[right] = temp;
    }
    return arr;
}

var result2 = reverseArr2(arr);

console.log(result2)

var testArray = [1, 2, 3, 4, 5]

var reversed = testArray.reverse();
console.log(reversed)