/* CHALLENGE
************
    Bronze:
    
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

// let name = "Kelly";

// if(name == "Kelly") {
//     console.log(`Hello, my name is ${name}`)
// } else {
//     console.log(`Hello, is your name ${name}?`)
// }


/*SECOND CHALLENGE: Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name2 = "zAchARy";

//? BRONZE:

if (name2[0] === name2[0].toUpperCase) {
    console.log(name2)
} else {
    console.log("hey, this isn't written correctly")
}

//? SILVER:

if (name2[0] === name2[0].toUpperCase) {
    console.log(name2[0])
}  else {
    console.log(name2.slice(1).toLowerCase()) //! had to use slice(1) instead of brackets like name2[1] because brackets will only return a specific character of a string; NOT multiple characters of a string!
}

//? GOLD:

if (name2[0] === name2[0].toUpperCase) {
    console.log(name2[0] + name2.slice(1).toLowerCase())
} else {
    console.log(name2[0].toUpperCase(0) + name2.slice(1).toLowerCase())
}

//* FIZZ BUZZ CHALLENGE

/*- create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5 */


let fb = 6

if (fb)
