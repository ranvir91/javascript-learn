// =======================
// Higher-Order Functions
// =======================

// Definition:
// A higher-order function is a function that does one or both of the following:

// Takes another function as an argument (callback function).
// Returns a function as its result.
// Use cases:

// Simplifying code with abstraction.
// Functional programming.
// Common in array methods like map, filter, and reduce.
// Example: Higher-Order Function Taking a Callback

// javascript
// Copy code
// // Higher-order function: takes a function as an argument
// function calculate(operation, a, b) {
//   return operation(a, b);
// }

// // Callback functions
// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// // Using the higher-order function
// console.log(calculate(add, 5, 3));      // Output: 8
// console.log(calculate(multiply, 5, 3)); // Output: 15
// Explanation:

// calculate is the higher-order function because it takes another function (operation) as an argument.
// The add and multiply functions are callbacks.
// Example: Higher-Order Function Returning Another Function

// javascript
// Copy code
// // Higher-order function that returns a function
// function greet(greeting) {
//   return function (name) {
//     return `${greeting}, ${name}!`;
//   };
// }

// const sayHello = greet("Hello");
// console.log(sayHello("John")); // Output: Hello, John!

// const sayGoodbye = greet("Goodbye");
// console.log(sayGoodbye("Alice")); // Output: Goodbye, Alice!
// Explanation:

// greet returns a function.
// sayHello and sayGoodbye are created by calling greet with specific greetings.




// ===========================
// curring
// ===========================


// Currying
// Definition:
// Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

// Benefits:

// Reusability of functions.
// Easier partial application of arguments.
// Improves code readability.
// Example of Currying

// javascript
// Copy code
// // Function without currying
// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3)); // Output: 6

// // Curried function
// function curriedAdd(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(curriedAdd(1)(2)(3)); // Output: 6

// // Partial application
// const addOne = curriedAdd(1);
// const addOneAndTwo = addOne(2);
// console.log(addOneAndTwo(3)); // Output: 6
// Explanation:

// curriedAdd breaks the function into three nested functions, each accepting one argument.
// It allows partial application — calling the function with fewer arguments initially and supplying the rest later.
// Simplified Currying Using Arrow Functions

// javascript
// Copy code
// const curriedMultiply = (a) => (b) => (c) => a * b * c;

// console.log(curriedMultiply(2)(3)(4)); // Output: 24


// function adds(a) {
//     return function(b) {
//         return function (c) {
//             return a+b+c;
//         }
//     }
// }
// console.log(adds(2)(3)(4));

// const logger = (time) => (eventtype) => (message) => {
//   return (`time: ${time}, error or event type: ${eventtype}, Complete message: ${message}`);
// }
// const loggertype = logger('12pm');
// const finallog = loggertype('Fatal');
// console.log(finallog('this is finall full message'));



// ======================
// Function Composition
// ======================


// Definition:
// Function composition is the process of combining multiple functions to create a new function. The output of one function becomes the input of another.

// Benefits:

// Reduces redundancy.
// Improves modularity.
// Simplifies complex logic.
// Example of Function Composition

// javascript
// Copy code
// const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// const appendExclamation = (str) => `${str}!`;
// const greet = (name) => `Hello, ${name}`;

// // Composing functions manually
// const greetAndShout = (name) => appendExclamation(capitalize(greet(name)));

// console.log(greetAndShout("john")); // Output: Hello, John!
// Explanation:

// greet generates a greeting string.
// capitalize capitalizes the first letter of the greeting.
// appendExclamation appends an exclamation mark to the greeting.
// These functions are combined in greetAndShout to produce the final result.
// Automated Function Composition Using a Helper Function

// javascript
// Copy code
// // Compose utility to combine multiple functions
// const compose = (...functions) => (value) =>
//   functions.reduceRight((acc, func) => func(acc), value);

// // Individual functions
// const double = (x) => x * 2;
// const square = (x) => x * x;
// const subtractFive = (x) => x - 5;

// // Composing functions
// const composedFunction = compose(double, square, subtractFive);

// console.log(composedFunction(5)); // Output: 50
// Explanation:

// compose takes multiple functions and applies them in right-to-left order.
// The input 5 is passed to subtractFive (output: 0), then squared (output: 0), and finally doubled (output: 50).
// Summary
// Higher-Order Functions:

// Functions that take other functions as arguments or return other functions.
// Examples: map, filter, reduce.
// Currying:

// Transforms functions to accept arguments one at a time.
// Enables partial application.
// Function Composition:

// Combines multiple functions into one.
// The output of one function serves as the input for another.
// These concepts are fundamental in functional programming and help to write clean, modular, and maintainable JavaScript code.
