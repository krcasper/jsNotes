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

// let Kelly = true;
// name = "Kelly";

// if (name == "Kelly") {
//     console.log(name)
// } else {
//     console.log("Hello, what is your name?")
// } 

// if (name /== "Kelly")

// {
//     console.log("Hello, my name is Kelly")
// }


//SOLUTION

// let name = "Justin";

// if (name == "Justin"){
//     console.log(name);
// } else {
//     console.log("Hello, what is your name?");
// }

// let name = "Austin";

// if (name == "Justin"){
//     console.log("Hello, my name is", name + "!");
// } else {
//     console.log("Hello, what is your name?");
// }

// let name = "Justin";

// if (name == "Justin"){
//     console.log("Hello, my name is", name + "!");
// } else {
//     console.log("Hello, is your name", name + "?");
// }

// let name = "Austin";

// if (name == "Justin"){
//     console.log("Hello, my name is", name + "!");
// } else {
//     console.log(`Hello, is your name ${name}?`);
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



// console.log(
//     name.charAt(1))

//     //if (the first letter of a string is uppercase), then console.log the string, ELSE console.log hey this isn't written correctly

// console.log(name.toUpperCase())

// console.log(name.charAt(0))

// console.log(name.charAt(0))
// console.log(name.charAt(0).toUpperCase());



//TODO: Bronze

// let name = "zAchARy";

// // if (name[0] === name[0].toUpperCase) {
// //     console.log(name);
// // } else {
// //     console.log("hey, this isn't written correctly")
// // }

// // console.log(name[0] === name[0].toUpperCase)



//TODO: Silver: if the first letter of a string is uppercase, only console.log that letter
    //TODO if it is not, console.log the rest of the string Without the first letter, and change them to lowercase

//     let name = "zAchARy";

//     if (name[0] == name[0].toUpperCase()) {
//     console.log(name[0])
// } else {
//     console.log(name.slice(1).toLowerCase());
// }

/* Gold:
If the first letter of a string is uppercase, 
    console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase 
    plus the rest of the string to lowercase */

let name = "zAchARy";

if (name[0] == name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(`console log #1:`, isUpperCase)
} else {
    let notUpperCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(`console log #2:`, notUpperCase)
    
}