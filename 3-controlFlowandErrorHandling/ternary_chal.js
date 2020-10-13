/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 17;

let message = age >= 25 ? "Yay! You can rent a car!" : (age >= 21 ? "Yay! You can drink!" : (age >= 18 ?"You can vote!" : "Sorry!"))

console.log(message)

    
    