// ===================================
// 1. Garbage Collection in JavaScript
// ===================================

// What is Garbage Collection?
// Garbage Collection (GC) is an automatic process in JavaScript that frees up 
// memory occupied by objects that are no longer accessible or needed. 
// It ensures that unused memory is released, keeping the program efficient and 
// preventing memory bloat.


// How it works:
// JavaScript uses algorithms like "mark-and-sweep" to detect objects that are no longer
//  reachable from the root (e.g., global variables or active function scopes).

// Example of Garbage Collection
// function demoGarbageCollection() {
//     let obj = { name: "John" };
//     console.log(obj); // Output: { name: "John" }

//     obj = null; // Dereference the object
//     // Now the original object is no longer accessible
// }

// demoGarbageCollection();
// // Garbage collector will free the memory occupied by the object

// Explanation:

// - Initially, the obj variable references an object in memory.
// - When obj is set to null, the reference to the object is removed.
// - Since there are no more references to the object, the garbage collector identifies 
// it as "unreachable" and frees up the memory.
// - How Garbage Collection Works (Mark-and-Sweep)
// - Mark Phase: The garbage collector identifies all accessible objects starting from 
// the root (e.g., global objects, function stacks).
// - Sweep Phase: Objects that are not marked (unreachable) are removed, and 
// their memory is reclaimed.


// =================================
// 2. Memory Leaks and Optimizations
// =================================

// What is a Memory Leak?
// A memory leak occurs when unused memory cannot be freed because references to it still
//  exist, even though the memory is no longer needed. 
// Over time, this can cause performance issues and crashes.

// Common Causes of Memory Leaks
// Unintentional Global Variables
// Variables declared without let, const, or var become global, and they stay in memory 
// for the lifetime of the program.

// Example:
// function memoryLeakExample() {
//     // Forgot to use let/const/var
//     someValue = "I am a global variable"; 
// }
// memoryLeakExample();

// console.log(window.someValue); // Accessible globally
// // 'someValue' will not be garbage collected because it is attached to the global object.

// Fix: Always declare variables with let, const, or var.

// Dangling Event Listeners
// If event listeners are not properly removed, they can hold references to 
// objects unnecessarily.

// Example:
// function createListener() {
//     const button = document.getElementById("btn");
//     button.addEventListener("click", () => {
//         console.log("Button clicked!");
//     });
//     // 'button' may still be in memory if not properly handled
// }
// createListener();

// Fix: Use removeEventListener when the listener is no longer needed.
// function createListener() {
//     const button = document.getElementById("btn");
//     const handler = () => {
//         console.log("Button clicked!");
//     };
//     button.addEventListener("click", handler);

//     // Clean up the event listener
//     button.removeEventListener("click", handler);
// }
// createListener();


// Timers or Intervals Not Cleared
// If timers (setInterval or setTimeout) are not cleared, they can hold references 
// and cause memory leaks.

// // Example of Memory Leak:
// function startTimer() {
//     const user = { name: "Alice" };
//     setInterval(() => {
//         console.log(user.name);
//     }, 5000);
//     // 'user' will never be garbage collected because setInterval keeps referencing it
// }
// startTimer();


// // Fix: Clear intervals when they are no longer needed.
// function startTimer() {
//     const user = { name: "Alice" };
//     const timerId = setInterval(() => {
//         console.log(user.name, ` | time => ${(new Date()).getSeconds()}`);
//     }, 500);

//     // Stop the timer after 3 seconds
//     setTimeout(() => {
//         clearInterval(timerId);
//         console.log("Timer stopped after 3 sec");
//     }, 3000);
// }
// startTimer();


// Closures Holding References
// Closures can sometimes unintentionally hold references to variables.

// // Example:
// function memoryLeakWithClosure() {
//     let someBigData = new Array(1000000); // Large data

//     return function () {
//         console.log("Using some data!");
//     };
// }
// const leakyFunction = memoryLeakWithClosure();
// // 'someBigData' is still in memory because the closure retains a reference.



// Fix: Nullify unnecessary variables to break references.

// function memoryLeakFixed() {
//     let someBigData = new Array(1000000);

//     return function () {
//         console.log("Using some data!");
//     };

//     someBigData = null; // Explicitly clear reference
// }
// const fixedFunction = memoryLeakFixed();



// Detached DOM Elements
// DOM elements removed from the DOM tree but still referenced in JavaScript can 
// cause memory leaks.

// Example:

// const div = document.createElement("div");
// document.body.appendChild(div);

// div.onclick = () => {
//     console.log("Div clicked");
// };

// // Remove the element
// document.body.removeChild(div);
// // 'div' is still in memory because the event listener references it.



// Fix: Remove event listeners before detaching the element.

// div.onclick = null;
// document.body.removeChild(div);


// Tips to Prevent Memory Leaks : 
// Always declare variables with let or const to avoid global scope leaks.
// Clean up event listeners with removeEventListener when not needed.
// Use clearTimeout and clearInterval to clean up timers.
// Avoid unnecessary references in closures.
// Nullify references to large objects or DOM elements when done.
// Use tools like Chrome DevTools to monitor memory usage and find leaks.

