// let isOn = false;
// // (<if some expression>) {<do something>}
// if (isOn == true) {
// //     console.log("The light is on!");
// // };

// if (isOn) {
//     console.log("The light is on!");
// };

// if (isOn == false) {
//     console.log("The light is off");
// };

// weather = 75;

// // if (weather < 70) {
// //     console.log("Wear a jacket");
// // } else ()

// if (weather < 70) {
//     console.log("Wear a jacket")
// } else { // else can follow and if statement and will fire
//     // if the above statements didn't
//     console.log("No jacket necessary!");
// };

// SWITCH STATEMENTS:
let officeCharacter="Pam";

switch(officeCharacter) {
    //kinda like if officeCharacter == "Michael"
    case "Michael":
        console.log("My mind is giong a mile an hour");
        break; //break will leave the switch after the block runs
    case "Dwight":
        console.log("Perfectenshclag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default: 
        console.log(`I'm sorry, ${officeCharacter}, but do I know you`);
}

// OUTPUT WAS: I'm sorry Pam, but do I know you?



let dessert = "carrots";

switch (dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice scream!");
    default:
        console.log("Not on the menu.");
}

// OUTPUT WAS: Not on the menu.


// else if tangent:
if (dessert == "cake") {
    console.log("Cake is great!");
} else if (dessert == "ice cream") {
    console.log("I scream for ice cream!");
 } else { console.log("Not on the menu.");
}





// else if tangent
//! CODE COPIED FROM SLACK - JUSTIN'S CODE :)
// if (dessert == "cake") {
//     console.log('Cake is great!');
// } else if (dessert == "ice cream") {
//     console.log('I scream for ice cream!');
// } else {
//     console.log('Not on the menu.');
// }


// Ternary
// ternaries work like:  () ? true : false

let num = 6;
// () ? true : false
(num > 0) ? console.log('yes') : console.log('no');