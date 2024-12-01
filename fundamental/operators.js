// 1. Arithmetic Operators
// =========================

// What is the output of the following code?
// console.log(10 + 5); // 15
// console.log(10 - 5); // 5
// console.log(10 + '5'); // 105
// console.log(10 - '5'); // 5
// console.log(10 * '5'); // 50
// console.log(10 / '5'); // 2
// console.log('10' + 5); // 105
// console.log('10' - '5'); // 5
// console.log('10' * '5'); // 50
// console.log('10' * 'a'); // NaN



// Write a JavaScript program to calculate the remainder of a division using the modulus operator (%).
// let a = 11;
// console.log(a%3);


// What is the output of the following code?
// console.log(5 * 2 + 8 / 4); // 12


// Explain the difference between ++ (increment) and -- (decrement) operators. Write examples for both prefix and postfix usage.

// Prefix Mode:
// The operator is placed before the variable.
// The value of the variable is incremented or decremented first, and then the new value is returned.
// let x = 10;
// let y = ++x; // x becomes 11, y becomes 11
// console.log(x); // Output: 11
// console.log(y); // Output: 11

// Postfix Mode:
// The operator is placed after the variable.
// The original value of the variable is returned first, and then the variable is incremented or decremented.
// let x = 10;
// let y = x++; // y becomes 10, x becomes 11
// console.log(x); // Output: 11
// console.log(y); // Output: 10


// Write a program to calculate the square of a number using the ** operator.
// let x = 3
// console.log(x**3);


// What happens when you add a number and a string together? Provide an example.
// will concat as string
// console.log(3 + '4'); // 34


// How can you calculate the cube of a number in JavaScript? Write a program for it.
// function cube(num) {
//     return (num**3)
// }
// console.log(cube(4));


// Write a program to swap two numbers without using a temporary variable.
// let a = 1, b = 3;
// a = a + b; // a becomes 4
// b = a - b; // first separate b from sum then remains a, assign to b
// a = a - b; // now subtract b from sum and assign to a
// console.log(a, b);

// let x = 1, y = 3;
// console.log(x, y);
// [y, x] = [x, y]
// console.log(x, y);


// What is the output of the following code?
// console.log(10 % 3); // 1
// console.log(-10 % 3); // -1


// How can you perform division and ensure the result is a whole number (integer)? Write an example using Math.floor() function.
// function divide(num, num1) {
//     return Math.floor(num / num1)
//     // return (num / num1)
// }
// console.log(divide(11, 3));



// 2. Logical Operators
// =====================

// What are the three main logical operators in JavaScript? Provide an example for each.
// && , || , !
// let a = true, b = false;
// console.log(a && b); // false
// console.log(a || b); // true
// console.log(a != b); // true
// console.log(!a); // false
// console.log(!!a); // false


// Write a program to check if a number is both positive and even using logical operators.
// let x = -1
// if((x>=0) && (x%2==0)) {
//     console.log(`number is ${x}, It is a positive and even number`);
// }
// else if(x > 0){
//     console.log(`number is ${x}, It is positive`);
// } else {
//     console.log(`number is ${x}, It is not positive`);
// }

// function isPositiveEven(number) {
//     return number > 0 && number % 2 === 0;
// }
// const number = 10;
// console.log(isPositiveEven(number));
// if (isPositiveEven(number)) {
//     console.log(number + " is a positive even number.");
// } else {
//     console.log(number + " is not a positive even number.");
// }


// What is the output of the following code?
// console.log(true && false); // false
// console.log(false || true); // true
// console.log(!true); // false


// Explain the difference between && (AND) and || (OR) operators with examples.
// && checks all expression is true and its valid if all expression is true
// || checks one of the expression is true and its valid if any one is true, example is above this


// Write a JavaScript program to check if a person is eligible to vote. The person must be at least 18 years old and a citizen of the country.
// let age = 17
// if(age >= 18) {
//     console.log(`age is ${age} and citizen is eligible to vote`);    
// } else {
//     console.log(`age is ${age} and citizen is not eligible to vote`);    
// }


// What is the output of the following code?
// let a = 0;
// console.log(a || 5); // 5
// console.log(5 || a); // 5
// console.log(a && 5); // 0
// console.log(5 && a); // 0


// How does the ! (NOT) operator work with truthy and falsy values? Demonstrate with examples.
// console.log(!true); // false
// console.log(!4); // false
// console.log(!0); // true


// Write a program that checks if either of two conditions is true using the OR operator (||).
// console.log(true || false); // true

// What happens when you combine more than two logical operators in a single expression? Show an example.
// console.log((0 && 5)); // 0
// console.log((0 && 5) || 2); // 2
// console.log((0 && 5) || true); // true


// Can logical operators work with non-Boolean values in JavaScript? Demonstrate with examples.
// yes, returns 2nd operand
// console.log('hello' && 5); // 5
// console.log(5 && 'hello'); // hello
// console.log(2 || false); // 2
// console.log(false || 2); // 2 returns the any truthy value


// 3. Comparison Operators
// =========================

// What is the difference between == (equality) and === (strict equality)? Provide examples for both.
// == matches value, === matches values and datatype both

// Write a program to compare two strings using the greater than (>) operator.
// console.log(2>1); // true

// What is the output of the following code?
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(5 != "5"); // false
// console.log(5 !== "5"); // true


// How does JavaScript handle comparison between a number and a string? Write an example to explain.
// let num = 10;
// let str = "10";
// console.log(num == str);   // Output: true
// console.log(num === str);  // Output: false

// Write a program to check if a number is in a specific range (e.g., between 10 and 20) using comparison operators.
// let num = 21
// if(num<=20 && num >=10) {
//     console.log(`${num} is between range of 10 and 20`);    
// } else {
//     console.log(`${num} is not between range of 10 and 20`);    
// }


// What is the output of the following code?
// console.log("apple" > "banana"); // false
// console.log("apple" < "banana"); // true
// console.log("a" < "b"); // true
// console.log("c" < "b"); // false


// Can comparison operators be used with Boolean values? Write examples to demonstrate.
// console.log(true > false); // true
// console.log(true < false); // false

// Write a program to check if two variables are not equal using both != and !==.
// console.log(2 != '2'); // false
// console.log(2 !== '2'); // true

// Explain how JavaScript performs type coercion in comparison operations. Show an example.
// string and boolean both converted to number while comparing


// What is the result of comparing null and undefined using == and ===? Write code to explain.
// console.log(null == undefined); // true
// console.log(null === undefined); // false
