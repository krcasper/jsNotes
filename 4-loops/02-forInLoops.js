
// let student = {
//     name: "Justin",
//     awesome: false,
//     degree: "Javascript",
//     week: 1
// // }
// // for (item in student) {
// //     // console.log(item);
// //     console.log(student[item]);   
// // }

// let cats = ["tabby", "british shorthair", "burmese"]
// for (cat in cats) {
//     console.log(cats[cat]);
//     console.log(cat);
// }

/* CHALLENGE 1:
    - write a for in loop that capitalizes the first letter of a name, and lowercase the rest of the name
    */


// //MY WORK:
// let myname = "kELly CasPeR"
// for (characters in myname) {
//     console.log(characters);
//     console.log(myname[characters]);
// }

// SOLUTION:
let name = "jUstiN AhAnN"
let capName;

for (let i in name){
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}