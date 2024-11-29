// 1. Strings
// ==========================

// How do you find the length of a string in JavaScript? Write an example.
// var name = 'ranvir';
// console.log(name.length);


// Write a JavaScript program to concatenate two strings using the + operator and concat() method.
// let fname = 'ranvir'
// let lname = 'singh'
// let name = '';
// // name = fname + ' ' + lname
// name = fname.concat(' ', lname, ' age=33');
// console.log(name)


// What is the difference between slice(), substring(), and substr()? Provide examples.
// str = 'hello world'
// console.log(str.slice(2, 4)); // start index, end index excluding
// console.log(str.substring(2, 4)); // start index, end index excluding
// console.log(str.substr(2, 4)); // start index, end index including


// How can you check if a string contains a certain substring in JavaScript? Write code for it.
let str = 'hello world'
// console.log(str.includes('world')); // true


// What is the output of the following code?
// str = "JavaScript";
// console.log(str[4]); // S
// console.log(str.charAt(4)); // S



// 2. Numbers
// ================
// What is the difference between Number() and parseInt()? Provide examples.

// Converts a string or a number to a number.
// If the input is not a valid number, it returns NaN (Not a Number).
// const str1 = "10";
// const str2 = "hello";
// const num1 = 15;

// console.log(Number(str1)); // Output: 10
// console.log(Number(str2)); // Output: NaN
// console.log(Number(num1)); // Output: 15

// parseInt():
// Parses a string and returns an integer.
// It takes an optional second argument, the radix, which specifies the base of the number system 
// (e.g., 10 for decimal, 16 for hexadecimal).

// const str1 = "10";
// const str2 = "10px";
// const str3 = "0xF"; // Hexadecimal number
// console.log(parseInt(str1)); // Output: 10
// console.log(parseInt(str2)); // Output: 10 (ignores 'px')
// console.log(parseInt(str3, 16)); // Output: 15

// Use Number() when you want to convert a string to a number, including floating-point numbers.
// Use parseInt() when you want to convert a string to an integer, especially when dealing with numbers in different bases (e.g., hexadecimal, binary).


// Write a program to check if a given number is finite using JavaScript.
// function isFiniteNumber(number) {
//     return Number.isFinite(number);
// }
  
//   const number1 = 10;
//   const number2 = Infinity;
//   const number3 = NaN;
//   const number4 = -Infinity;
  
//   console.log(isFiniteNumber(number1));  // Output: true
//   console.log(isFiniteNumber(number2));  // Output: false
//   console.log(isFiniteNumber(number3));  // Output: false
//   console.log(isFiniteNumber(number4));  // Output: false


// How can you round a number to a fixed number of decimal places in JavaScript? example using toFixed().
const number = 3.14159;
// const roundedNumber = number.toFixed(2); // Round to 2 decimal places
// console.log(roundedNumber); // Output: "3.14"

// const roundedNumber = parseFloat(number.toFixed(2));
// Or
// const roundedNumber = Number(number.toFixed(2));
// console.log(roundedNumber);


// What is the output of the following code?
// console.log(0.1 + 0.2 === 0.3); // false in all case == , ===
// console.log(0.1 + 0.2); // 0.30000000000004


// Write a program to generate a random number between 1 and 100.
// function generateRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     return randomNumber;
// }
// console.log(generateRandomNumber());

// let rand = Math.random();
// rand = Math.floor(rand * 100) + 1;
// console.log(rand);



// 3. Booleans
// ==============

// What are the possible values of a Boolean in JavaScript? Explain with examples.

// Truthy and Falsy Values:
// In JavaScript, certain values can be implicitly converted to boolean values:
// Truthy values: Any value that is not false, 0, -0, null, undefined, NaN, or an empty string ("") is considered truthy.
// Falsy values: The values false, 0, -0, null, undefined, NaN, and "" are considered falsy.

// console.log(Boolean(10));     // Output: true
// console.log(Boolean("hello")); // Output: true
// console.log(Boolean(0));       // Output: false
// console.log(Boolean(""));      // Output: false
// console.log(Boolean(null));   // Output: false
// console.log(Boolean(undefined)); // Output: false


// Write a code snippet to demonstrate how to use a Boolean in a conditional statement.
// let a = true;
// if(a) {
//     console.log('this is true');
// }

// How can you convert other data types to Boolean in JavaScript? Show examples using Boolean() and !!.
let a = 10;
// console.log(Boolean(a));
// console.log(!!Boolean(a));


// What is the output of the following code?
// console.log(Boolean(0)); // false
// console.log(Boolean("hello")); // true
// console.log(!!undefined); // false

// What happens when you use && (AND) or || (OR) with Boolean values? Demonstrate with examples.
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(true || true); // true



// 4. Null
// =========

// What is the null value in JavaScript? How is it different from undefined?
// Null:
// It is a deliberate assignment, indicating that a variable has no value.
// You can assign null to a variable intentionally.
// It represents an empty value or a non-existent object.

// Undefined:
// It indicates a variable that has been declared but has not been assigned a value.
// It also represents the value returned by a function that doesn't explicitly return anything.
// It often arises from mistakes in code, such as trying to access a variable that doesn't exist.

// let x;
// console.log(x, typeof x); // undefined undefined
// x = 5
// console.log(x, typeof x); // 5 number
// x = null
// console.log(x, typeof x); // null object


// How can you check if a variable has a value of null? Write an example.
// let myVariable = null
// console.log(typeof myVariable);
// if (typeof myVariable === 'object' && myVariable === null) {
//     console.log("The variable is null.");
// }


// What is the output of the following code?
// let x = null;
// console.log(typeof x); // object


// Write a program where you assign null to a variable and later reassign it with a valid value.
// let myvar = null
// console.log(myvar);
// myvar = 100
// console.log(myvar);


// How does null behave in mathematical operations? Explain with examples like null + 5.
// console.log(Number(null) , null + 5); // 5


// 5. Undefined
// ===============

// What does undefined mean in JavaScript? How is it different from null?
// when a variable is declared but value is not assigned / initialized
// and null is object type and its premitive data type

// What is the default value of a declared but uninitialized variable in JavaScript?
// ans - undefined

// What is the output of the following code?
// let y;
// console.log(y); // undefined
// console.log(typeof y); // undefined


// Can a function return undefined? Demonstrate with an example.
// function thisisfunc() {
//     let a = 22; // and return nothing
// }
// console.log(thisisfunc()); // undefined


// How can you differentiate between undefined and other falsy values in JavaScript?

// let x;
// let y = 0;
// let z = "";
// console.log(x, typeof x); // Output: 'undefined'
// console.log(typeof y); // Output: number
// console.log(typeof z); // Output: string

// if (typeof x === 'undefined') {
//   console.log('x is undefined');
// }
// if (y === 0) {
//   console.log('y is zero');
// }
// if (z === "") {
//   console.log('z is an empty string');
// }


// 6. Symbol
// ============


// What is a Symbol in JavaScript, and why is it used? Provide an example.

// A Symbol is a unique and immutable primitive data type introduced in ES6. It's primarily used to create unique identifiers for object properties. This is particularly useful for creating private properties that are not directly accessible from outside the object.

// Why use Symbols?

// Unique Identifiers:
// Symbols guarantee uniqueness, preventing property name collisions, especially in large-scale applications.
// Private Properties:
// By using symbols as property keys, you can create properties that are not enumerable and can't be accessed directly from outside the object.
// Well-Known Symbols:
// JavaScript provides a set of well-known symbols that can be used to customize the behavior of objects and built-in functions.


// Can two symbols with the same description be equal? Explain with code.
// const sym1 = Symbol("foo");
// const sym2 = Symbol("foo");
// console.log(sym1 , sym2); // Symbol(foo) Symbol(foo)
// console.log(sym1 === sym2); // false

// How can you add a Symbol as a property key in an object? Demonstrate with an example.
// const mySymbol = Symbol('mySymbol');
// const myObject = {
//     [mySymbol]: 'This is a value associated with the symbol'
// };
// console.log(myObject); // Output: This is a value associated with the symbol
// console.log(myObject[mySymbol]); // Output: This is a value associated with the symbol


// Write code to show how Symbol.for() and Symbol.keyFor() work.

// const mySymbol = Symbol.for('mySymbol');
// console.log(mySymbol); // Output: Symbol(mySymbol)

// // Accessing the symbol by its key
// const retrievedSymbol = Symbol.keyFor(mySymbol);
// console.log(retrievedSymbol); // Output: mySymbol

// Symbol.for('mySymbol'):
// This creates a global Symbol with the key "mySymbol".
// If a Symbol with the same key already exists, it returns the existing Symbol.
// This ensures that you get the same Symbol object even if you call Symbol.for('mySymbol') multiple times.

// Symbol.keyFor(mySymbol):
// This function takes a Symbol as input and returns its key, if it's a global Symbol.
// If the Symbol is not global (created with Symbol() without a key), it returns undefined.


// What is the output of the following code?
// const sym1 = Symbol("foo");
// const sym2 = Symbol("foo");
// console.log(sym1 , sym2);
// console.log(sym1 === sym2); // false


// 7. BigInt
// ============

// What is BigInt in JavaScript, and why is it used? Write an example of creating a BigInt.
// console.log(typeof 11111111111111111111111111111111111111111111111111111111111111111111n); // bigint


// How is BigInt different from regular numbers in JavaScript? Provide an example.

// // regular number
// let largenumer = Number.MAX_SAFE_INTEGER;
// console.log(largenumer); // 9007199254740991

// // bigint number
// let biggerNumber = 9007199254740991n;
// console.log(biggerNumber + 1n); // 9007199254740992n


// Write a program to add two BigInt numbers.
// let biggerNumber = 9007199254740991n;
// console.log(biggerNumber + 1n); // 9007199254740992n

// What happens when you mix a BigInt with a regular number in an operation? Explain with an example.
// console.log(22 + 2n); // this will show error if we mix


// What is the output of the following code?
// const big = 1234567890123456789012345678901234567890n;
// console.log(typeof big); // bigint
