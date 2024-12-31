// Defination :
// The ability of a function is taken as parameter and returned as function is the Higer order function. 
// other words, higher-order functions are functions that operate on other functions, either by:
// Taking one or more functions as arguments.
// Returning a function as a result.

// They are a powerful concept in functional programming and are widely used in JavaScript for tasks like:
// - Abstracting over actions.
// - Creating reusable utility functions.
// - Implementing callbacks and event handling.
// - Working with asynchronous operations.

// Examples:
// 1. Taking a function as an argument:

// function operate(num1, num2, operation) {
//   return operation(num1, num2);
// }

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// let sum = operate(5, 3, add);       // sum = 8
// let difference = operate(10, 4, subtract); // difference = 6

// console.log(sum);       // Output: 8
// console.log(difference); // Output: 6
// In this example, operate is a higher-order function because it takes the add or subtract functions as arguments.


// 2. Returning a function:

// function multiplier(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5));  // Output: 10
// console.log(triple(5));  // Output: 15
// Here, multiplier is a higher-order function because it returns a new function. The returned functions (double and triple)
//  "remember" the factor due to closure.


// Common Higher-Order Functions in JavaScript:

// JavaScript has several built-in higher-order functions that are frequently used:

// 1. map(): Creates a new array by applying a function to each element of an existing array.

// const numbers = [1, 2, 3];
// const doubledNumbers = numbers.map(num => num * 2); // [2, 4, 6]

// 2. filter(): Creates a new array containing only the elements from an existing array that pass a certain condition.

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]


// 3. reduce(): Reduces an array to a single value by applying a function to each element and an accumulator.

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 10
// console.log(sum);


// 4. forEach(): Executes a provided function once for each array element.

// const numbers = [1, 2, 3];
// numbers.forEach(num => console.log(num)); // Output: 1, 2, 3


// 5. sort(): Sorts the elements of an array in place and returns the sorted array. It can take a comparison function as an argument to customize the sorting order.

// const numbers = [3, 1, 4, 1, 5, 9];
// numbers.sort((a, b) => a - b); // Sorts in ascending order
// Higher-order functions enable concise, expressive, and reusable code. They are a core part of functional programming in
// JavaScript and are essential for writing more advanced and efficient applications
