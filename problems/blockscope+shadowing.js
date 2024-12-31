// Defination :
// Block scope ----
// =================
// Block scope refers to the visibility and accessibility of variables within a specific block of code.
// In JavaScript, a block is defined by curly braces {}. Variables declared with let and const have block scope,
// meaning they are only accessible within the block where they are defined.


// { // Start of a block
//     let x = 10;
//     const y = 20;
//     var z = 30; // var is not block scoped
//     console.log(x); // Output: 10
//     console.log(y); // Output: 20
//     console.log(z); // Output: 30
// } // End of the block
  
// console.log(x); // Error: x is not defined (outside the block)
// console.log(y); // Error: y is not defined (outside the block)
// console.log(z); // Output: 30 (var is function scoped or global)
// In this example, x and y are only accessible within the curly braces. Trying to access them outside the block results in a ReferenceError. However, z declared with var is accessible outside the block because var is function-scoped (or global if declared outside any function).
  

// Shadowing:
// ================
// Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.
// The inner variable "shadows" the outer variable, meaning that within the inner scope, the inner variable takes precedence.   
  
// let outerVar = "I'm outer";
// function myFunction() {
//     let outerVar = "I'm inner"; // Shadows the outerVar
//     console.log(outerVar); // Output: I'm inner (inner variable is accessed)
// }

// myFunction();
// console.log(outerVar); // Output: I'm outer (outer variable is accessed)
// In this example, the outerVar inside myFunction shadows the outerVar declared outside the function. Inside myFunction,
// outerVar refers to the inner variable. Outside the function, outerVar refers to the outer variable.


// Shadowing with var, let, and const:
  
// Shadowing can occur with all 3 variable declaration keywords (var, let, and const), but the scoping rules affect how it works:

// var: If you redeclare a var variable in an inner scope, it's treated as the same variable 
//      (unless it's within a function scope).
// let and const: If you redeclare a let or const variable in an inner block scope, it creates a new, separate variable that 
// shadows the outer one. This is because let and const are block-scoped.

//   Example Demonstrating Different Scoping:
  
// var globalVar = "global";
// let blockVar = "outer block";
// function testScope() {
//     var globalVar = "function local"; // Modifies the global variable (if no 'use strict') or declares new variable in function scope
//     let blockVar = "inner block"; // Creates a new block-scoped variable
//     console.log("Inside function:", globalVar);   // Output: Inside function: function local
//     console.log("Inside function:", blockVar);    // Output: Inside function: inner block
//     {
//         let blockVar = "inner of inner block"
//         console.log("Inside inner block:", blockVar) // Inside inner block: inner of inner block
//     }
// }
// testScope();
// console.log("Outside function:", globalVar); // Output: Outside function: global
// console.log("Outside function:", blockVar);  // Output: Outside function: outer block

// Key Takeaways: 
// let and const have block scope, while var has function or global scope.
// Shadowing allows you to reuse variable names in inner scopes without affecting outer scopes (when using let and const).
// Understanding scoping and shadowing is crucial for writing predictable and bug-free JavaScript code. 
// Using let and const is generally preferred over var to avoid unexpected behavior related to scoping


// illegal shadowing
// let a = 10;
// {
//     var a = 50;
// }
//  this gives error bcz a is polluting the block scope