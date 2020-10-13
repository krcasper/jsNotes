//! IF ELSE

let FB1 = 3;

if (FB1 % 3 == 0 && FB1 % 5 == 0) {
    console.log("Fizz Buzz")
} else if (FB1 % 5 == 0) {
    console.log("Buzz") 
} else if (FB1 % 3 == 0) {
console.log("Fizz");
} else {
    console.log(FB1)
}

// ! SWITCH!

let FB2 = 30;

switch (true) {
    case (FB2 % 15 == 0):
        console.log("Fizz Buzz");
        break;
    case (FB2 % 5 == 0):
        console.log("Buzz");
        break;
    case (FB2 % 3 == 0):
        console.log("Fizz");
        break;
}

// //! TERNARY!

let FB3 = 30;

(FB3 % 15 == 0) ? console.log("Fizz Buzz") :
(FB3 % 5 == 0) ? console.log("Buzz") :
(FB3 % 3 == 0) ? console.log("Fizz") :
console.log(FB);


/* - write a for loop running between the numbers 0 - 100
    - for multiples of 3, instead of the number, console.log "Fizz"
    - for multiples of 5 console.log "Buzz";
    - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
    - for any other number, console.log the value 
*/

for (i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    
    }
}


