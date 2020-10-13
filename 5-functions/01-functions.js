//! DECLARATIONS (1 way to run a function)

function hi() {
    console.log("HI")
}

    //! Now let's CALL (tell it to run) the function:

hi();

//! EXPRESSIONS (another way to run a function)

let hello = function () {
    console.log("Hey!")
}

hello();

//! FUNCTION EXAMPLES

function addIt() {
    console.log(5+10)
};
addIt()



function counting() {
    for (i = 1; i <= 10; i++) {
        console.log(i)
    }
}
counting()


//* CHALLENGE TIME!
//! Given the array, create a function that lists out the values individually. HINT - check forInloop notes!
//! let arr = ["This", "is", "really", "cool"]


//! THE CODE BELOW USES A "for-of" loop:

let arrs = ["This", "is", "really", "cool"]

function solution() {
    for (let arr of arrs) {
    
        console.log(arr)
}
}

solution()

//! THE CODE BELOW USES A STANDARD FOR-LOOP:

function solution2() {
    for (let i = 0; i < arrs.length; i++) {
        console.log(arrs[i]);
    }
}

solution2()

//! THE CODE BELOW IS DANIELLE'S SOLUTION TO THE CHALLENGE, USING A FOR-OF LOOP:

let arr = ["This", "is", "really", "cool"];
function arrList() {
    for (item of arr) {
        console.log(item)
    }
}


arrList()