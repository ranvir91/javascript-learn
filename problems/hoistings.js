// Defination :
// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope 
// during the compilation phase, before the code is actually executed. This means you can sometimes use 
// variables and functions before they are declared in your code.
// However, it's crucial to understand how hoisting works for different types of declarations to avoid unexpected behavior.


// Here are 10 JavaScript hoisting problems with explanations:

// 1. Variable Hoisting (var):

// console.log(x); // Output: undefined
// var x = 10;
// console.log(x); // Output: 10
// Explanation: var declarations are hoisted to the top of their scope, but the initialization (assignment) is not. So, x exists but has a value of undefined until the assignment line is reached.


// 2. Function Declaration Hoisting:

// greet("World"); // Output: Hello, World!

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// Explanation: Function declarations are fully hoisted, meaning both the declaration and initialization are moved to the top of the scope.


// 3. Function Expression Hoisting:

// greet("World"); // Output: TypeError: greet is not a function

// var greet = function(name) {
//   console.log("Hello, " + name + "!");
// };
// Explanation: Function expressions are treated like variable declarations. The variable greet is hoisted, but its value is undefined until the assignment line. Trying to call greet before the assignment results in a TypeError.


// 4. let and const Hoisting (Temporal Dead Zone):

// console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
// let y = 20;
// Explanation: let and const are hoisted, but they are not initialized. Accessing them before the declaration results 
// in a ReferenceError. This period between hoisting and declaration is called the Temporal Dead Zone (TDZ).


// 5. Hoisting within Functions:

// function myFunction() {
//   console.log(z); // Output: undefined
//   var z = 30;
//   console.log(z); // Output: 30
// }

// myFunction();
// // Explanation: Hoisting occurs within each function scope. The z variable is hoisted to the top of the myFunction scope.



// 6. Hoisting and Function Arguments:

// function myFunc(a) {
//   console.log(a); // Output: 5
//   var a = 10;
//   console.log(a); // Output: 10
// }

// myFunc(5);
// // Explanation: Function arguments are treated as local variables and are initialized before the function body executes. 
// // The var a inside the function shadows the argument a after the assignment.


// 7. Hoisting with Nested Functions:

// function outer() {
//   function inner() {
//     console.log("Inner");
//   }
//   inner(); // Output: Inner
//   function inner() {
//     console.log("Inner 2");
//   }
//   inner(); // Output: Inner 2
// }

// outer();
// // Explanation: In this case, there are two function declarations of the same name. The second declaration overrides 
// // the first due to hoisting.


// 8. Hoisting and Strict Mode:

// Strict mode doesn't change how hoisting works but can help catch errors related to accidental global variables,
// which are often related to misunderstanding hoisting.



// 9. Hoisting and Block Scope (let/const):

// {
//   console.log(blockVar); // ReferenceError: Cannot access 'blockVar' before initialization
//   let blockVar = 40;
// }
// Explanation: let and const are block-scoped. They are hoisted to the top of the block, but they are in the TDZ until their declaration line.



// 10. Combining var, let and const

// // console.log(testVar); // undefined
// // console.log(testLet); // ReferenceError
// // console.log(testConst); // ReferenceError

// var testVar = 'var';
// let testLet = 'let';
// const testConst = 'const';

// console.log(testVar); // var
// console.log(testLet); // let
// console.log(testConst); // const
// This emphasizes the difference in hoisting behavior between var, let, and const
