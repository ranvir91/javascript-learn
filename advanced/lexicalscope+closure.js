// 1. Lexical Scoping in JavaScript
// ================================
// Lexical scoping means that the scope of a variable is determined by its position in the source code
// at the time of writing. In JavaScript, a function’s scope chain is defined by the location where 
// the function is declared, not where it is called. This allows the function to access variables defined
// in its outer (parent) scope.

// Example: Lexical Scoping
// function outerFunction() {
//   let outerVar = "I am from the outer function";

//   function innerFunction() {
//     console.log(outerVar); // innerFunction has access to outerVar
//   }

//   innerFunction();
// }

// outerFunction();
// // Output: I am from the outer function

// Explanation:
// innerFunction can access outerVar because it is defined within outerFunction.
// This is lexical scoping: the function's access to variables is determined by its position in the code.

// Nested Functions and Lexical Scope
// Lexical scoping works with multiple levels of nested functions.

// function firstFunction() {
//   let firstVar = "Outer Variable";

//   function secondFunction() {
//     let secondVar = "Inner Variable";

//     function thirdFunction() {
//       console.log(firstVar);  // Accesses variable from firstFunction
//       console.log(secondVar); // Accesses variable from secondFunction
//     }

//     thirdFunction();
//   }

//   secondFunction();
// }

// firstFunction();
// // Output:
// // Outer Variable
// // Inner Variable

// Explanation:
// thirdFunction can access both firstVar and secondVar due to lexical scoping.


// 2. Closures in JavaScript
// =========================
// A closure is created when a function is able to remember and access its lexical scope even when 
// that function is executed outside its original scope.

// In other words, a closure allows:
// A function to "close over" variables defined in its outer scope.
// These variables persist even after the outer function has returned.

// Example of Closure
// function outerFunction() {
//   let counter = 0;

//   return function innerFunction() {
//     counter++;
//     console.log(`Counter: ${counter}`);
//   };
// }

// const increment = outerFunction(); // outerFunction returns innerFunction

// increment(); // Output: Counter: 1
// increment(); // Output: Counter: 2
// increment(); // Output: Counter: 3

// Explanation:
// outerFunction returns innerFunction.
// innerFunction maintains access to the counter variable due to closure.
// Even though outerFunction has finished execution, the counter variable persists because it is closed over by innerFunction.

// Practical Applications of Closures
// Encapsulation of Data (Private Variables) Closures allow you to "hide" variables and expose only what is necessary.
// function createCounter() {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//       console.log(`Count: ${count}`);
//     },
//     decrement: function () {
//       count--;
//       console.log(`Count: ${count}`);
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

// const counter = createCounter();
// counter.increment(); // Count: 1
// counter.increment(); // Count: 2
// counter.decrement(); // Count: 1
// console.log(counter.getCount()); // 1

// Explanation:
// The variable count is private because it is not directly accessible outside createCounter.
// The increment, decrement, and getCount methods form closures over count and allow controlled access.

// Creating Functions Dynamically Closures allow you to dynamically create functions with specific behaviors.
// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// Explanation:
// multiplier takes factor and returns a function.
// The returned function "remembers" the factor due to closure.

// Timer/Interval with Closures Closures are often used in setTimeout or setInterval to maintain access to variables.
// function delayedMessage(message, delay) {
//   setTimeout(function () {
//     console.log(`Message: ${message}`);
//   }, delay);
// }

// delayedMessage("Hello after 2 seconds", 2000);
// // Output (after 2 seconds): Message: Hello after 2 seconds

// Explanation:
// The callback passed to setTimeout forms a closure over the message variable.
// The message persists even after delayedMessage has finished execution.

// Event Listeners with Closures Closures are useful when dealing with event listeners.
// function attachEventListeners() {
//   let count = 0;

//   document.getElementById("btn").addEventListener("click", function () {
//     count++;
//     console.log(`Button clicked ${count} times`);
//   });
// }

// // HTML
// // <button id="btn">Click me</button>

// attachEventListeners();

// Explanation:
// The event listener callback forms a closure over the count variable.
// Each click updates the count while maintaining its state.

// Memoization with Closures Closures can help cache results of expensive function calls (Memoization).
// function memoize(fn) {
//   const cache = {};

//   return function (x) {
//     if (cache[x]) {
//       console.log("Fetching from cache");
//       return cache[x];
//     } else {
//       console.log("Calculating result");
//       const result = fn(x);
//       cache[x] = result;
//       return result;
//     }
//   };
// }

// const square = memoize((x) => x * x);
// console.log(square(4)); // Calculating result: 16
// console.log(square(4)); // Fetching from cache: 16
// console.log(square(5)); // Calculating result: 25

// Explanation:
// memoize creates a closure that maintains the cache object.
// Results for the same input are fetched from the cache instead of recalculating.

// Key Differences Between Lexical Scoping and Closures
// Aspect	Lexical Scoping	Closures
// Definition	Determines scope of variables at compile time.	Allows functions to "remember" variables from outer scopes.
// Focus	Relates to scope chain and accessibility.	Relates to function execution context.
// Example	Accessing variables defined in the outer function.	Retaining state even after the outer function returns.

// Conclusion :
// 1. Lexical scoping determines variable accessibility based on their position in the code.
// 2. Closures enable functions to "remember" variables from their lexical scope even after the 
//  parent function has finished execution.
// 3. Closures are a powerful feature that is widely used for encapsulation, dynamic function creation,
//  timers, event handling, and optimization techniques like memoization.