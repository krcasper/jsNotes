let name = fName => {
    return "Hudson"
}

let myName = name();
console.log(myName);

//! to check quickly what's going on:
console.log(name())


/* CHALLENGE: Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tip(costOfMeal, tipPercentDecimal) {
    return costOfMeal * tipPercentDecimal
};

let solution = tip(30, 0.20)
console.log(solution)

//! DANIELLE'S SOLUTIONS
function tipCalc(bill){
    let tip = bill * 0.2;
    return tip.toFixed(2)
}

let totalTip = tipCalc(19.72);
console.log(totalTip)

let tipCalc = bill => bill * 0.2;
let totalTip = tipCalc(19.72)
console.log(totalTip)


//! Another, more complicated example below:

function capitalizeName(name) {
    let capName = " ";
    for (l in name) {
        console.log(capName)
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    return capName
}

console.log(capitalizeName("kELLy"))