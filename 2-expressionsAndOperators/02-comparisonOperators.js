// EQUAL (operator is ==)
console.log("3" == 3); // output: true. double equals just compare the values. if it says true, they're the same. if it says false, they aren't.
console.log(3 == 3)
console.log("3" == "3");

// STRICT EQUAL (operator is ===). You'll be using strict equal most of the time.
console.log("3" === 3); //output: false
console.log(3 == 3); //output: true

// NOT EQUAL
console.log("3" != 3); //output = false. It's saying "it is false that these are not equal"

// STRICT NOT EQUAL
console.log("3" !== 3);

// GREATER THAN
3 > 2;

// LESS THAN
2 < 3;

// GREATER THAN OR EQUAL TO
3 >= 2

// LESS THAN OR EQUAL TO
2 <= 3

// AND
2 && 3

// OR
2 || 3


console.log(3>2>1); //comes back as false, even though we know it's true. Gets into "coercion".
console.log(3>2);
console.log(true>1) // 1>1. In JS, true = 1 and false = 0.

console.log(3>2>=1) // comes back correct/true.