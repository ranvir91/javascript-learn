// Declare a const array, and then try to modify its contents (e.g., add an element). Can you do it? Why?

const arr = [1, 2, 3];
arr.push(4)
// console.log(arr);

// Declare a const object and try to add, update, and delete its properties. Is it allowed? Why?
const obj = {name:'rv', city:'indore'};
obj.name = 'ranvir'
obj.age = 33
delete obj.city
// console.log(obj);

// What happens when you use a variable declared with var before its declaration in the code? eg.
// console.log(x); // undefined
// console.log(x===null); // false
// console.log(x==null); // true
// var x = 5;
// console.log(x);

// What happens when you use a variable declared with let or const before its declaration? Explain with an example.
// console.log(x);
// const x = 5;
// console.log(x);
// it will throgh ReferenceError cannot access before initialization

// Write code where let and const are used inside a for loop. Compare their behavior with var inside a loop.
// for(let i=0; i<3; i++) {
//     console.log(i);
// }
// console.log('==>',i);
// cannot assign to any const, let i cannot be used outside the {} block


// What is the temporal dead zone (TDZ) in JavaScript? Demonstrate it using let or const.
// console.log(a);
// let a = 2;
// console.log(a);
// the block from starting to till variable is declared is tdz


// Can you reassign a variable declared with let? Show an example.
// yes we can
// let name = 'rv';
// name = 'ranvir';
// console.log(name);


// Can a var variable be declared outside a function but still be globally accessible? Show an example.
// var globalname = 'ranvir singh'
// function nameprint() {
//     console.log(globalname);
// }
// nameprint()


// Explain why var is function-scoped, and let and const are block-scoped with an example.
var globalname = 'ranvir singh'
{
    let name = 'ranvir s'
    const name1 = 'ranvir singh 1'
}
// console.log(name, name1); // both are not defined because they are block scoped
// console.log(globalname); // its function scoped


// What is hoisting in JavaScript? How does it affect var, let, and const differently? demonstrate this

// var :
// Declarations are hoisted to the top of their scope, but their assignments are not.
// This means you can use a var variable before it's declared, but its value will be undefined until it's assigned.
// console.log(x); // Output: undefined
// console.log(y); // ReferenceError: Cannot access 'y' before initialization

// let and const :
// Declarations are also hoisted to the top of their scope, but they are subject to temporal dead zone (TDZ).
// This means you cannot access let or const variables before they are declared. Trying to do so will result in a ReferenceError.

var x = 10;
let y = 20;

function myFunction() {
  console.log(z); // undefined
  var z = 30;
  console.log(x, y, z); // Output: 10, 20, 30
}
myFunction();

// Bonus Questions
// Explain why using const is generally preferred over let or var in modern JavaScript.
// What happens if you try to redeclare a variable using var after it has already been declared using let or const?
// Write code to demonstrate how var creates a property on the window object, while let and const do not.
// When would you use let instead of const? Provide a real-life example.



//  answers of all questions

/*
1. Declare a const array, and then try to modify its contents (e.g., add an element). Can you do it? Why?
Yes, you can modify the contents of a const array because while the reference to the array is constant, the array itself is still mutable. You cannot reassign the array itself, but you can modify its elements.

javascript
Copy code
const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // Output: [1, 2, 3, 4]

arr = [5, 6, 7]; // Error: Assignment to constant variable
Why?
The const keyword only ensures that the reference to the array cannot change, but the array's contents can still be manipulated.

2. Declare a const object and try to add, update, and delete its properties. Is it allowed? Why?
Yes, you can add, update, and delete properties of a const object. However, like arrays, you cannot reassign the object itself.

javascript
Copy code
const obj = { name: "Alice", age: 25 };

// Modifying the object is allowed
obj.age = 26; // Update
obj.city = "New York"; // Add
delete obj.name; // Delete

console.log(obj); // Output: { age: 26, city: "New York" }

obj = { name: "Bob" }; // Error: Assignment to constant variable
Why?
The const keyword ensures that the reference to the object is constant, but the object itself remains mutable.

3. What happens when you use a variable declared with var before its declaration in the code? Explain with an example.
When you use a var variable before its declaration, it doesn't throw an error because var declarations are hoisted to the top of the scope. However, the value will be undefined until the actual assignment.

javascript
Copy code
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10
Why?
During the creation phase of the execution context, var declarations are hoisted but not their assignments. Hence, the variable exists but is undefined.

4. What happens when you use a variable declared with let or const before its declaration? Explain with an example.
Using let or const before their declaration results in a ReferenceError because they are in the Temporal Dead Zone (TDZ) until their declaration is encountered.

javascript
Copy code
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
Why?
Variables declared with let and const are hoisted but remain in the TDZ until the code execution reaches their declaration.

5. Write code where let and const are used inside a for loop. Compare their behavior with var inside a loop.
javascript
Copy code
// Using var
for (var i = 0; i < 3; i++) {
    console.log("Inside loop:", i); // Prints: 0, 1, 2
}
console.log("Outside loop:", i); // Prints: 3 (var is function-scoped)

// Using let
for (let j = 0; j < 3; j++) {
    console.log("Inside loop:", j); // Prints: 0, 1, 2
}
console.log("Outside loop:", typeof j); // Error: j is not defined (let is block-scoped)

// Using const
for (const k = 0; k < 3; k++) {
    console.log(k); // Error: Assignment to constant variable
}
Comparison:

var is function-scoped, so it is accessible outside the loop.
let is block-scoped, so it is not accessible outside the loop.
const cannot be reassigned, making it unsuitable for use as a loop counter.
6. What is the temporal dead zone (TDZ) in JavaScript? Demonstrate it using let or const.
The Temporal Dead Zone (TDZ) is the period between the start of a scope and the point where the variable is declared. Accessing a variable in the TDZ throws a ReferenceError.

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

{
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 20;
}
Explanation:
The variable is in the TDZ from the start of the block until its declaration.

7. Can you reassign a variable declared with let? Show an example.
Yes, you can reassign a let variable.

let x = 5;
console.log(x); // Output: 5

x = 10; // Reassignment is allowed
console.log(x); // Output: 10

8. Can a var variable be declared outside a function but still be globally accessible? Show an example.
Yes, var declared outside a function becomes a global variable and is added to the window object (in browsers).

var globalVar = "I am global";
console.log(globalVar); // Output: I am global
console.log(window.globalVar); // Output: I am global
Note:
In strict mode ("use strict"), this behavior is not recommended.

9. Explain why var is function-scoped, and let and const are block-scoped with an example.
var is function-scoped, meaning it is scoped to the nearest function.
let and const are block-scoped, meaning they are scoped to the nearest {} block.

function test() {
    if (true) {
        var a = "var scoped";
        let b = "let scoped";
        const c = "const scoped";
    }
    console.log(a); // Output: var scoped
    console.log(b); // Error: b is not defined
    console.log(c); // Error: c is not defined
}
test();
Explanation:
a declared with var is accessible outside the block because it is function-scoped, while b and c are block-scoped and cannot be accessed outside the block.


10. What is hoisting in JavaScript? How does it affect var, let, and const differently? Write code to demonstrate.
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the compilation phase.

// Example with var
console.log(x); // Output: undefined (hoisted but not initialized)
var x = 5;

// Example with let
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Example with const
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
Explanation:

var is hoisted and initialized with undefined.
let and const are hoisted but remain in the Temporal Dead Zone until their declaration is encountered. Accessing them before declaration results in a ReferenceError.

*/
