// 10/08/2020 - Day 2
// variables are just a box to store some of your code
let a = 2;

   let     b     =    1
// (1)    (2)   (3)  (4)

// 1- Keyword. The one we'll see the most. Basic variable keyword.
// 2- Variable name. Can call it whatever you want
// 3- Assignment Operator. Means that value b is going to be assigned to 1 in the above example.
// 4- Variable Value (what you're going to store)

console.log(a + b);

let c = 3;

// note - Javascript is case sensitive!

let hello = 'greet';
let Hello = 'greet again';
        //single quotes vs. double quotes are the same in javascript. Danielle just recommends choosing one and sticking with it.

let hiThere = "hey";

// VAR LET CONST syntaxes. Var is an old version, don't use it. Let is newer - USE THIS. Finally, const is not changeable - cannot reassign value to that variable
var x = 1;
let y = 2;
const z = 3;

// DECLARATIONS vs INITILIALIZATION
let n;
console.log(n);
// this came out as "undefined", because we had not assigned a value!

n=10;
console.log(n);
// this came out as 10



// LET vs CONST
let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty); //output is "Great! Wonderful!"

today = "Lovely!";
console.log(today, elevenFifty);

elevenFifty = "Super!";
console.log(today, elevenFifty); //output is an error, because elevenFifty is a constant and constants can't be reassigned.