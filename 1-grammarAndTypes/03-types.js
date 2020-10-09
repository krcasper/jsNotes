// BOOLEANS (true/false)
let on = true;
console.log(on);

let off = false;
console.log(off);

// NULL *NOTE - null is different than undefined. Undefined is if a variable hasn't been described
let empty = null;
console.log(empty);

// UNDEFINED - when null is used correctly, "undefined" normally refers to an error or something you forgot to define
let undef = undefined;
console.log(undef);

let x;
console.log(x)


// NUMBERS

let degrees = 90
console.log(degrees)

let precise = 999999999999999; //15 characters
console.log(precise);

let rounded = 9999999999999999; //16 characters
console.log(rounded)
// javascript runs into issues when you have more than 15 numbers! 

let notQuite = 0.2 + 0.1
console.log(notQuite) // output is 0.30000000000000004

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard) // output is 0.3

let a = Number("123");
console.log(a); //output is 123



// STRINGS
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = 'I\'m home';  //backslash before 'm means that we're not closing the string, we just need an apostrophe
let stringFour = `I'm home`; //this uses "backticks". another way to avoid the issues with apostrophes
let stringFive = `You can use ${stringOne} or ${stringTwo}!`

console.log(stringFive) //output is: You can use double quotes or single quotes!

// NUMBERS vs.  STRINGS

let first = 1050 + 100; //two numbers, just simple addition. Output is 1150
let second = "1050" + "100"; //two strings; output is 1050100. doing concatination here! Just putting them together

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let animal = "dog";

console.log("I have a " + animal); //this is called CONCATINATION
console.log(`I have a ${animal}`) // this is called STRING INTERPOLATION. Used more often in the professional world.
// does the above example only work with backticks?
// console.log("I have a ${animal}") okay, tried it and it didn't work.

// OBJECTS (can store a lot of stuff. BIG DEAL in javascript).

let frodo = {
    race: "hobbit",
    rings: 1,
    isShort: true,
};
// the above is called key value pairs. They can store lots of different types of data

console.log(frodo);
console.log(typeof frodo);

// ARRAYS - similar to objects in that they can store multiple different data types; but it's more of a list set-up than an object is
// arrays need square brackets!
let tacos = ["large", 4, true];
console.log(tacos);
console.log(typeof tacos); //code spat out objects. Technically per Javascript, arrays are classified as objects.


// STRING PROPERTIES AND METHODS

let myName = "Danielle";
console.log(myName.length);
console.log(myName.toUpperCase());

let home = "My home is Fishers";
console.log(home.includes("Fishers")) //returns a boolean true/false. Note that if we had searched "fishers", it would not have come back.

let sent = "This sentence will be split into individual parts";

let cars;
console.log(cars)