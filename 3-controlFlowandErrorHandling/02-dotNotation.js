//? DOT NOTATION

let student = { //"let student ={...}" is an object, like a dictionary except we're in javascript!
    name: "Justin",
    grade: 12
};

let names = [ //this is an array, which is technically still an object.
    "Justin",
    "Adam",
    "Amy"
]
//? square bracket notation? Justin keeps mentioning this. don't use square bracket, use dot notation.

// ways to access an object
console.log(student.name);
console.log(student["name"]);

//ways of accessing an array
console.log(names[2])

console.log(names.slice(1,3))