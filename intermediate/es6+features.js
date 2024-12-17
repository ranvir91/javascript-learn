// 1. Template Literals
// Template literals are string literals enclosed in backticks (``) instead of single or double quotes.
// They allow embedded expressions and multi-line strings.

// Example 1: String Interpolation
// const name = "John";
// const age = 30;
// console.log(`My name is ${name} and I am ${age} years old.`);
// // Output: My name is John and I am 30 years old.

// Example 2: Multi-line Strings
// const paragraph = `This is the first line.
// This is the second line.`;
// console.log(paragraph);
// // Output:
// // This is the first line.
// // This is the second line.

// Example 3: Embedded Expressions
// const x = 10;
// const y = 20;
// console.log(`The sum of x and y is ${x + y}.`);
// // Output: The sum of x and y is 30.

// 2. Destructuring
// ================
// Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

// Example 1: Array Destructuring
// const fruits = ["apple", "banana", "cherry"];
// const [first, second, third] = fruits;
// console.log(first, second, third);
// // Output: apple banana cherry

// Example 2: Object Destructuring
// const user = { name: "Ranvir", age: 25, country: "USA" };
// const { name, age } = user;
// console.log(name, age);
// // Output: Ranvir 25

// Example 3: Default Values
// const colors = ["red"];
// const [primary, secondary = "blue"] = colors;
// console.log(primary, secondary);
// // Output: red blue

// Example 4: Nested Destructuring
// const person = { name: "Bob", address: { city: "NYC", zip: 10001 } };
// const { address: { city } } = person;
// console.log(city);
// // Output: NYC

// 3. Spread/Rest Operators
// ========================
// The spread operator (...) is used to expand arrays or objects, while the rest operator is used 
// to collect multiple elements into a single array or object.

// Example 1: Spread Operator with Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const combined = [...arr1, ...arr2];
// console.log(combined);
// // Output: [1, 2, 3, 4, 5]

// Example 2: Spread Operator with Objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);
// // Output: { a: 1, b: 2, c: 3 }

// Example 3: Rest Operator in Functions
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Example 4: Rest Operator in Destructuring
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4]

// 4. Modules (import/export)
// JavaScript modules allow splitting code into reusable files using export and import.

// Example 1: Exporting a Function
// File: math.js
// export function add(a, b) {
//   return a + b;
// }

// File: main.js
// import { add } from './math.js';
// console.log(add(2, 3)); 
// // Output: 5

// Example 2: Default Export
// File: greet.js
// export default function greet(name) {
//   return `Hello, ${name}`;
// }

// File: main.js
// import greet from './greet.js';
// console.log(greet("John"));
// // Output: Hello, John

// Example 3: Exporting Multiple Items
// File: utils.js
// export const PI = 3.14;
// export function square(num) {
//   return num * num;
// }

// File: main.js
// import { PI, square } from './utils.js';
// console.log(PI); // Output: 3.14
// console.log(square(4)); // Output: 16


// 5. let, const, and Block Scope
// ==============================
// In JavaScript:
// let is used to declare variables that can be reassigned.
// const is used to declare variables that cannot be reassigned.
// Both are block-scoped, meaning they exist only within the {} block they are defined in.
// Example 1: Block Scope of let and const
// {
//   let x = 10;
//   const y = 20;
//   console.log(x, y); // Output: 10 20
// }
// // console.log(x, y); // Error: x and y are not defined

// Example 2: let Can Be Reassigned
// let name = "Ranvir";
// name = "Bob";
// console.log(name); 
// // Output: Bob

// Example 3: const Cannot Be Reassigned
// const age = 30;
// // age = 31; // Error: Assignment to constant variable

// Example 4: const with Objects
// const user = { name: "Ranvir" };
// user.name = "Bob"; // Allowed: modifying properties
// console.log(user); 
// // Output: { name: "Bob" }

// Example 5: Comparison with var
// if (true) {
//   var a = 10; // Function-scoped
//   let b = 20; // Block-scoped
//   const c = 30; // Block-scoped
// }
// console.log(a); // Output: 10
// // console.log(b, c); // Error: b and c are not defined

// These concepts are foundational in modern JavaScript, 
// enabling concise syntax and better code management