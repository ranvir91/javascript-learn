// function greet(name, fn) {
//     console.log(`Hi, ${name}`);
//     fn();    
// }
// function welcome() { console.log(`Welcome guest`); }
// function bye() { console.log(`Goodbye guest`); }
// greet('Ranvir', welcome);
// greet('Ranvir', bye);

// function fetchServerData(callback) {
//     setTimeout(() => {
//       let data = {name: 'Ranvir'}; // fetched from server
//       console.log("Data fetched from the server.", data);
//       callback(data);
//     }, 1000);
// }
// function printName(name) {
//   console.log(`The name is ${name}`);
// }
// fetchServerData((inputdata) => {
//     console.log(`Callback received: Data paylod`);
//     // make another server request where input is required from last server call result
//     printName(inputdata.name);
// });
// Output:
// Data fetched from the server.
// Callback received: Data payload
  
// function fetchFname() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let fname = 'Ranvir';
//             resolve(fname);
//         }, 500);
//     });
// }
// function fetchLname() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let lname = 'Singh';
//             resolve(lname);
//         }, 500);
//     });
// }
// function concatName(fname, lname) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(fname + ' ' + lname);
//         }, 100);
//     });
// }
// function printName(name) {
//     return new Promise((resolve, reject) => {
//             console.log(`printname function to print name : ${name}`);
//             resolve(name);
//     });
// }

// fetchFname()
//   .then((fname) => {
//     return fetchLname()
//         .then(lname => {
//         return concatName(fname, lname)
//         .then((name) => {
//             return printName(name)
//         });
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });


// ==========================================

// 1. Callbacks in JavaScript
// A callback is a function passed as an argument to another function, 
// which is executed after the completion of that function.

// Example: Basic Callback
// function greet(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback();
// }

// function afterGreet() {
//   console.log("This is the callback function.");
// }

// greet("Ranvir", afterGreet); // Hello, Ranvir
// // This is the callback function.


// Example: Asynchronous Callback
// Callbacks are commonly used in asynchronous operations like reading a file, making API requests, 
// or handling timers.

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched from the server.");
//     callback("Data payload");
//   }, 2000);
// }
// fetchData((data) => {
//   console.log(`Callback received: ${data}`);
// });
// // Output:
// // Data fetched from the server.
// // Callback received: Data payload

// Problem with Callbacks: Callback Hell
// When multiple asynchronous operations depend on each other, it can lead to deeply nested callbacks, making the code hard to read and maintain.

// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });
// // Output:
// // Step 1 completed
// // Step 2 completed
// // Step 3 completed
// // All steps completed
// This is where Promises and async/await come in to simplify the code.


// 2. Promises in JavaScript
// ==========================
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
//  It can have three states:

// Pending: The operation is still ongoing.
// Fulfilled: The operation was completed successfully.
// Rejected: The operation failed.

// Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Simulating success or failure
//   if (success) {
//     resolve(`Promise resolved!`);
//   } else {
//     reject("Promise rejected!");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result); // Output: Promise resolved!
//   })
//   .catch((error) => {
//     console.log(`Error in catch:`, error); // If success was false: Promise rejected!
//   });


// Chaining Promises
// Promises allow you to avoid callback hell by chaining .then() methods.

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched");
//     }, 500);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data); // Output: Data fetched
//     return "Processing data";
//   })
//   .then((processedData) => {
//     console.log(processedData); // Output: Processing data
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


// Promise.all and Promise.race
// Promise.all: Resolves when all promises in the array are resolved.
// Promise.race: Resolves as soon as one promise in the array resolves.

// const promise1 = new Promise((resolve) => setTimeout(() => resolve("One"), 500));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve("Three"), 400));

// Promise.all([promise1, promise2, promise3]).then((results) => {
//   console.log("All resolved:", results); // Output: All resolved: ["One", "Two", "Three"]
// });

// Promise.race([promise1, promise2, promise3]).then((firstResolved) => {
//   console.log("First resolved:", firstResolved); // Output: First resolved: One
// });


// 3. Async/Await in JavaScript
// =============================
// async/await is a modern way to handle asynchronous code in a more readable and synchronous manner.
// It is built on top of Promises.

// Using async and await
// A function declared as async always returns a Promise.
// The await keyword pauses the execution of the async function until the Promise resolves.

// Example: Converting Promises to Async/Await
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 1000);
//   });
// }

// async function getData() {
//   console.log("Fetching data...");
//   const data = await fetchData(); // Wait for the Promise to resolve
//   console.log(data); // Output: Data fetched
//   console.log("Data processing complete.");
// }

// getData();
// // Output:
// // Fetching data...
// // Data fetched
// // Data processing complete.

// Error Handling with async/await
// You can use try...catch to handle errors in async/await code.

// function fetchData(isError) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isError) {
//         reject("Error fetching data");
//       } else {
//         resolve("Data fetched successfully");
//       }
//     }, 500);
//   });
// }

// async function getData() {
//   try {
//     const data = await fetchData(false); // Change to true to simulate an error
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getData();
// // Output:
// // Data fetched successfully (if isError = false)
// // OR
// // Error: Error fetching data (if isError = true)


// Real-Life Use Case: API Call
// async function fetchUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users); // Logs the list of users
//   } catch (error) {
//     console.error("Failed to fetch user data:", error);
//   }
// }

// fetchUserData();

// Comparison: Callbacks vs Promises vs Async/Await
// ------------------------------------------------------------------------------------
// | Feature	            |  Callbacks	      | Promises	        | Async/Await       |
// |----------------------------------------------------------------------------------|
// | Readability	        | Hard to read      |                   | Most readable and |
// |                      | (callback hell)	  |Better readability	| synchronous-like  |
// |----------------------------------------------------------------------------------|
// | Error Handling       | Callback-based    | .catch()          | try...catch       |
// |----------------------------------------------------------------------------------|
// | Chaining/Sequential  | Nested callbacks  | .then() chaining  | Sequential await  |
// |                      |                   |                   | statements        |
// ------------------------------------------------------------------------------------

// These tools are crucial for handling asynchronous operations in JavaScript.
// While callbacks were the original approach, Promises and async/await provide more 
// elegant solutions for modern JavaScript development