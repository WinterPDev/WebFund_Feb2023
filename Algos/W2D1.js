// Math Library Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);

var random = Math.random();
// random() returns a number from 0.0 to 0.99


console.log(floor);
console.log(ceiling);
console.log(random);


/*
Dice Roller
Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

Bonus Challenges
Level 1: Modify the function to roll for a dice with any side based on a sides parameter.
Level 2: Add another parameter for the number of die to roll and return each of the rolls performed as an array.
Level 3:Include another parameter that represents a "Dice Check" and the dice roll must meet or exceed that Dice Check value. 
        Return "You've slain the monster!" if you meet or exceed the Dice Check, otherwise return "The monster's slain you!"
*/

function d6() {
    var roll = Math.random() * 6;
    // your code here
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

/*
Consult The Oracle (Magic 8 Ball)
Using the following array, write a function that will answer all of our questions by randomly choosing a response

Bonus Challenges
Level 1: Include a parameter for the array for the function to use.
Level 2: Add another parameter for number of random responses and return an array of each result.
*/


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];










// ========= Solutions ================


var playerRoll = 0;

/* min = 1 */
/* max = 6 */
/* random() * (max-min) = [0, 1) * (6-1) */
/* random yield [0, 1/6) = 0 + min = 1*/
/* random yield [1/6, 1/3)  = 1 + min = 2*/
/* random yield [1/3, 1/2) = 2 + min = 3*/
/* random yield [1/2, 2/3) = 3 + min = 4*/
/* random yield [2/3, 5/6) = 4 + min = 5*/
/* random yield [5/6, 1) = 5 + min = 6*/

function d6() {
    var roll = Math.random();
    // your code here
    min = Math.floor(1);
    max = Math.ceil(6);
    roll = Math.floor(Math.random() * (max - min + 1) + min);
    return roll;
}
playerRoll = d6();
console.log("D6 rolled: " + playerRoll);

/* Bonus Challenges
Level 1: Modify the function to roll for a dice with any side based on a sides parameter.
Level 2: Add another parameter for the number of die to roll and return each of the rolls performed as an array.
Level 3:Include another parameter that represents a "Dice Check" and the dice roll must meet or exceed that Dice Check value. 
        Return "You've slain the monster!" if you meet or exceed the Dice Check, otherwise return "The monster's slain you!" */

/* lv 1 */
function dX(x) {
    var roll = Math.random();
    // your code here
    min = Math.floor(1);
    max = Math.ceil(x);
    roll = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    return roll;
}

playerRoll = dX(20);
console.log("DX rolled: " + playerRoll);

/* lv 2 */
function dXY(x, y) {
    var rolls = []
    // your code here
    min = Math.floor(1);
    max = Math.ceil(x);
    for (var i = 0; i < y; i++)
        rolls.push(Math.floor(Math.random() * (max - min + 1) + min)); // The maximum is inclusive and the minimum is inclusive
    return rolls;
}

playerRoll = dXY(20, 2);
console.log("DXY rolled: " + playerRoll);

/* lv 3 */
function dXYZ(x, y, reqMin) {
    var rolls = []
    // your code here
    var meetReq = false;
    min = Math.floor(1);
    max = Math.ceil(x);
    for (var i = 0; i < y; i++) {
        rolls.push(Math.floor(Math.random() * (max - min + 1) + min));
        if (rolls[i] == reqMin)
            meetReq = true;
    }
    if (meetReq)
        console.log("You've slain the monster!");
    else
        console.log("The monster's slain you!");

    return rolls;
}
playerRoll = dXYZ(20, 2, 10);
console.log("DXYZ rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

console.log("Answer today: " + bullS(lifesAnswers));

/* Bonus Challenges
Level 1: Include a parameter for the array for the function to use.
Level 2: Add another parameter for number of random responses and return an array of each result. */

/* Lv 1 */
function bullS(oracleAns) {
    min = Math.ceil(0);
    max = Math.floor(oracleAns.length - 1);
    roll = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    return lifesAnswers[roll];
}

/* Lv 2 */
function bullS2(oracleAns, t) {
    var rolls = [];
    min = Math.ceil(0);
    max = Math.floor(oracleAns.length - 1);
    for (var i = 0; i < t; i++)
        rolls.push(oracleAns[Math.floor(Math.random() * (max - min + 1) + min)]);
    return rolls;
}
console.log("Answer today: " + bullS2(lifesAnswers, 2));

// =======================================================================

function d6() {
    var roll = Math.ceil(Math.random() * 6);
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
function response(arr) {
    var roll = Math.floor(Math.random() * arr.length);
    var answer = arr[roll];
    return answer;

}

var ask = response(lifesAnswers);

console.log(ask);