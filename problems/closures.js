// Here are 10 JavaScript closure problems with explanations and solutions:

// 1. Counter Function:

// JavaScript

// function createCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3
// Explanation: The inner function forms a closure over the count variable, allowing it to retain its value between calls.

// 2. Private Variable:

// JavaScript

// function createSecret(secret) {
//   return {
//     getSecret: function() {
//       return secret;
//     }
//   };
// }

// const mySecret = createSecret("MyPassword");
// console.log(mySecret.getSecret()); // Output: MyPassword
// // console.log(mySecret.secret); // Error: mySecret.secret is undefined (private)
// Explanation: The secret variable is only accessible within the createSecret function, making it effectively private.

// 3. Loop and Closure (Classic Problem):

// JavaScript

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function() {
//     console.log(i); // Output: 6 (5 times)
//   }, i * 1000);
// }

// // Fixed using let
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i); // Output: 1, 2, 3, 4, 5
//     }, i * 1000);
//   }

// // Fixed using IIFE
// for (var i = 1; i <= 5; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i); // Output: 1, 2, 3, 4, 5
//     }, i * 1000);
//   })(i);
// }
// Explanation: The var keyword creates function-scoped variables. By the time the setTimeout callbacks execute, the loop has finished, and i is 6. Using let or an IIFE creates a new scope for each iteration, capturing the correct value of i.

// 4. Module Pattern:

// JavaScript

// const counterModule = (function() {
//   let count = 0;
//   return {
//     increment: function() {
//       return ++count;
//     },
//     decrement: function() {
//       return --count;
//     },
//     getValue: function(){
//         return count
//     }
//   };
// })();

// console.log(counterModule.increment()); // Output: 1
// console.log(counterModule.decrement()); // Output: 0
// console.log(counterModule.getValue()); // Output: 0
// Explanation: The IIFE creates a private scope for count, and the returned object exposes public methods to interact with it.

// 5. Function Factories:

// JavaScript

// function createMultiplier(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15
// Explanation: createMultiplier returns a function that "remembers" the value of x.

// 6. Data Encapsulation:

// JavaScript

// function createPerson(name) {
//   let age = 0;
//   return {
//     getName: function() {
//       return name;
//     },
//     setAge: function(newAge) {
//         if(newAge>0 && newAge<150)
//             age = newAge
//     },
//     getAge: function(){
//         return age
//     }
//   };
// }

// const person = createPerson("Alice");
// person.setAge(30)
// console.log(person.getName()); // Output: Alice
// console.log(person.getAge()); // Output: 30
// //console.log(person.age) //undefined
// Explanation: The age variable is encapsulated within the closure and can only be accessed or modified through the provided methods.

// 7. Preserving State:

// JavaScript

// function setupClickListener(element) {
//   let clickCount = 0;
//   element.addEventListener('click', function() {
//     clickCount++;
//     console.log('Clicked ' + clickCount + ' times');
//   });
// }

// const myButton = document.createElement('button');
// myButton.textContent = "Click Me";
// document.body.appendChild(myButton);
// setupClickListener(myButton);
// Explanation: Each button gets its own clickCount due to the closure created by setupClickListener.

// 8. Partial Application:

// JavaScript

// function add(x) {
//     return function(y) {
//         return x + y;
//     }
// }

// const add5 = add(5);
// console.log(add5(3)) // 8
// console.log(add5(10)) // 15
// Explanation: The add function returns a new function that has x "remembered" within its closure.

// 9. Avoiding Global Variables:

// JavaScript

// (function() {
//   let myVariable = "I'm local"; // Prevents polluting the global scope
//   console.log(myVariable); // Output: I'm local
// })();

// // console.log(myVariable); // Error: myVariable is not defined
// Explanation: The IIFE creates a new scope, preventing myVariable from becoming a global variable.

// 10. Iterators:

// JavaScript

// function createIterator(arr) {
//     let index = 0;
//     return {
//         next: function() {
//             if (index < arr.length) {
//                 return { value: arr[index++], done: false };
//             } else {
//                 return { value: undefined, done: true };
//             }
//         }
//     };
// }

// const myIterator = createIterator([10, 20, 30]);
// console.log(myIterator.next()); // { value: 10, done: false }
// console.log(myIterator.next()); // { value: 20, done: false }
// console.log(myIterator.next()); // { value: 30, done: false }
// console.log(myIterator.next()); // { value: undefined, done: true }
// Explanation: The iterator function keeps track of the index within its closure, allowing it to maintain state between calls to next().