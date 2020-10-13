let i = 7;

// i++ is shorthand for i = i + 1
for (i = 0; i < 10; i++){
    console.log(i);
}

for (i = 2; i < 20; i +=2){
    console.log(i);
}

console.log(`global variable`; i);

//Challenge 1: using a for loop, count from 10 to 0, going down by 1
for (i=10; i >=0; i--) {
    console.log(i);
} //OUTPUT: correct!

// Challenge 2: using a for loop, count from 0, going down by 2's to -24

for (i = 0; i >= -25; i-=2) {
    console.log(i);
}



//CHALLENGE 3: using a for loop, go through a name and display each letter individually
let name = "Kelly Casper";

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

// TO OMIT THE SPACE:

for (let i = 0; i < name.length; i++){
    if (name[i] != " "){
        console.log(name[i]);
    }
}

/* (1)                  (2)
for (<your_name_choice> of <some collection>) {
    <do something>
}
1. for loop dec.
2. of - is a build in the word saying for all things in a collection
common name is "for of" loop
*/


// FOR-OF LOOP:
for (letter of name) {
    console.log(letter)
}

// ANOTHER FOR-OF LOOP
let fruits = ["apple", "bananas", "kiwi"]
for (fruit of fruits) {
    console.log(fruit)
}

/*
CHALLENGE 4
- make a for loop where you add up all  the numbers from 1 to 50 (should equal 1275)
*/

let sum = 0;

for (let i = 1; i<= 50; i++){
    sum+= i;
}
console.log(sum);