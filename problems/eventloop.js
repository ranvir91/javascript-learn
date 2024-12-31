// Defination :
// The event loop is a fundamental concept in JavaScript that allows it to handle asynchronous operations efficiently,
// despite being a single-threaded language. It's the mechanism that makes non-blocking I/O possible in 
// JavaScript environments like browsers and Node.js.

// Here's a breakdown of the event loop and its components ========:

// Call Stack:
// The call stack is a LIFO (Last-In, First-Out) data structure that keeps track of the currently executing functions.
// When a function is called, it's pushed onto the stack. When the function completes, it's popped off the stack.

// Heap (Memory head):
// The heap is where objects are stored in memory.

// Callback Queue (or Task Queue):
// This is a queue that holds callback functions that are ready to be executed. These callbacks are typically associated
// with asynchronous operations like timers (setTimeout, setInterval), network requests (fetch, XMLHttpRequest), 
// and event listeners (click events, etc.).

// Event Loop:
// The event loop is a constantly running process that monitors the call stack and the callback queue. Its job is to check
// if the call stack is empty. If it is, the event loop takes the first callback from the callback queue and pushes it onto
// the call stack for execution.

// How it works:
// ==============
// 1. When JavaScript code is executed, functions are added to the call stack.
// 2. If an asynchronous operation is encountered (e.g., setTimeout), it's handed off to the browser or Node.js environment 
//      (which have their own mechanisms for handling these operations).
// 3. The asynchronous operation runs in the background.
// 4. When the asynchronous operation completes, its associated callback function is placed in the callback queue.
// 5. The event loop continuously checks the call stack.
// 6. If the call stack is empty, the event loop takes the first callback from the callback queue and pushes it onto the 
//      call stack for execution.
// 7. The callback function is then executed.

// Example:

// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 2000);
// console.log("Third");

// Execution flow:
// console.log("First") is executed and "First" is printed.
// setTimeout is called. The callback function (() => { console.log("Second"); }) is placed in the callback queue, 
//      and the timer starts.
// console.log("Third") is executed and "Third" is printed.
// After 2000ms, the timer completes, and the callback function is moved from the callback queue to the call stack.
// The callback function is executed, and "Second" is printed.

// Output:
// First
// Third
// Second

// Key takeaways:

// JavaScript is single-threaded, but the event loop allows it to handle asynchronous operations without blocking the main thread.
// The event loop continuously monitors the call stack and the callback queue.
// Callbacks from asynchronous operations are placed in the callback queue and executed when the call stack is empty.


// // console.log(`Start`);
// // function a() {
// //     console.log('function a()');
// //     for(let i=0; i<1000000; i++) {
// //         console.log(i);        
// //     }
// // }
// // a();
// // console.log(`End`);
// // logs Start, Numbers till 1 million, End


// // console.log(`Start`);
// // let btn = document.getElementById('btn');
// // btn.addEventListener('click', function cb() {
// //    console.log(`function CB called`);
// // });
// // console.log(`End`);


// //  intersting case is here

// // console.log(`Start`);
// // setTimeout(function cbTimer() {
// //     console.log(`cbTimer Called`);
// // }, 0);
// // fetch('https://jsonplaceholder.typicode.com/todos')
// // .then(function cbData() {
// //     console.log(`cbData Called, API`);
// // });
// // console.log(`End`);


