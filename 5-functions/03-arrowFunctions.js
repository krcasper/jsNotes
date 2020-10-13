//! CONCISE BODY
let hi = () => console.log("hi")

//! BLOCK BODY
let hi1 = () => {
    console.log("hi");
} 
//? this is not a very good way to do a function; but it is useful when you have multiple functions. Also called the "fat arrow" function.



//! CONCISE vs. BLOCK

let apples = x => console.log(`There are ${x} apples.`) //! "x" is the parameters. Multiple parameters would be parens ex. (x, y)
apples(10)

let apples2 = x => {
    console.log(`There are ${x} apples.`)
}
apples2(8);