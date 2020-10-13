//! Parameters: the stuff you can put inside of the parens around a function

function hi(name) {
    console.log(`Hi ${name}`)
}

hi("Keagan"); //* danielle called this "assigning an argument" to the function in order to get different outputs
hi("Justin")
hi("Ro")


function addIt(x, y) { //!giving it two different variables
    console.log(x+y);
};

addIt(2, 9);
addIt(8, 15);
addIt(7, 4);

/* CHALLENGE!
 Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call or invoke your function
*/

function challenge1() {
    let firstName = "Kelly";
    let lastName = "Casper";
    console.log(`Hello, my name is ${firstName} ${lastName}`)
}

challenge1()
//! The above example outputs the correct response, but doesn't use parameters. I'll try again below, naming my function "challenge2"



function challenge2(first, last) {
    console.log(`Hello, my name is ${first} ${last}`)
}

challenge2("Kelly", "Casper")
//! This way worked! Hooray for solving this challenge completely on my own! :)
    //? JK. Didn't have them come together in a variable inside the function.

//* DANIELLE'S SOLUTION:

function myName(fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

myName("Kelly", "Casper")


function multiply(a, b){
    return a*b;
  };

var x = multiply(2,3)
console.log(x)