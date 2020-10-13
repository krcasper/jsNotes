let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);


let y = 12;
function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

//! VAR vs. LET
//* var is scoped to the nearest function block, while let is scoped to the nearest enclosing block

var x = 12

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x)
    }
    console.log(x);
}
varTest()
console.log(x);

let x = 12;
function letTest() {
    var x = 33
    if (1 == 1) {
        let x = 45;
        console.log(x)
    }
    console.log(x)
}

letTest();
console.log(x);

//! yellow curly braces = function block
//! purple curly braces = enclosing block