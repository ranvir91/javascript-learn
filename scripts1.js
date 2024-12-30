// console.log('start');
// setTimeout(function() {
//     console.log('timeout');    
// }, 1000);
// console.log('end');



// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "ranvir";
// obj2 = { key: "another value" };

// console.log(obj1.key, obj2.key, obj3.key);
// console.log(obj1, obj2, obj3);



// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
// };
// const c = obj.b;
// obj.b();
// c();


// const x = { foo: 1 };
// const y = { foo: 2 };
// function addFoo(obj) {
//   return obj.foo + 1;
// }

// console.log(addFoo(x));
// console.log(addFoo(y));



// const arr = [1, 2, 3, 4, 5];

// function printA() {
//     for (var i = 0; i < arr.length; i++) {
//         setTimeout(function () {
//           console.log(i);
//         }, 1000);
//     }      
// }
// printA();



// const arr = [1, 2, 3, 4, 5];
// arr.forEach( (element) => {
//   console.log(element);
// });


// let x = 1;
// if (function f() {}) {
//   x += typeof f;
// }
// console.log(x);


// let a = {
//     x: 1,
//     y: 2,
// };
// let b = a;
// a.x = 5;
// console.log(a);
// console.log(b);

  

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y);
// console.log(x === y);
// console.log(z == y);
// console.log(z == x);

  

// var x = 0;
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         x++;
//         console.log(x);
//     }, 1000);
// }




// let a = { x: 1 };
// let b = { x: 2 };
// let c = { x: 3 };
// let d = { x: 4 };
// let e = { x: 5 };
// let arr = [a, b, c, d, e];

// arr.forEach((obj) => (obj.x = obj.x * 2));
// console.log(a.x, b.x, c.x, d.x, e.x);




// let num = 0;
// function test() {
//   var num = 1;
//   return num;
// }
// console.log(test());
// console.log(num);



// let obj = { name: "Ranvir", age: 25 };
// let newObj = { ...obj, age: 30 };

// console.log(obj.age);
// console.log(newObj.age);
// console.log(obj, newObj);




// const add = (a = 1, b = 2) => a + b;
// console.log(add());
// console.log(add(5));
// console.log(add(undefined, 10));



// const name = "Ranvir";
// const age = 25;
// const user = { name, age };
// console.log(user);



// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);



// console.log(typeof null);
// console.log(typeof undefined);
// console.log(null === undefined);
// console.log(null == undefined);

// console.log('object' === typeof null);
// console.log('undefined' === typeof undefined);


// 18. Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array.
// const arr = [1, -1, 2, 3];
// function addPositiveNumbersOnly(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(addPositiveNumbersOnly(arr));




// 19. Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.

// function removeVovels(s) {
//     let vovels = ['a', 'e', 'i', 'o', 'u'];
//     let str = '';
//     for(let i=0; i<s.length; i++) {
//         let finnd = vovels.indexOf(s[i]);
//         if(finnd === -1) {
//             str += s[i];
//         }
//     }
//     return str;
// }
// let input = 'ranvir';
// console.log(removeVovels(input));




// 20. Write a function in JavaScript that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.

// function sortStrings(arr) {
//     return arr.sort();
// }
// // Example usage:
// const strings = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(sortStrings(strings)); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']


// 21. Write a function in JavaScript that checks if a string is a palindrome.

// function checkPalindrom(str) {
//     let srev = '';
//     for(let i = str.length-1; i >=0; i--) {
//         srev += str[i];
//     }
//     if(str === srev) {
//         console.log(`given string [${str}] is Palindrome`);
//     }
//     else {
//         console.log(`given string [${str}] is NOT Palindrome`);
//     }
// }
// let s = 'aka';
// checkPalindrom(s);


// 22. Write a function in JavaScript that finds the second highest number in an array of numbers.
// let arr = [1, 20, 4, 5, 11, 6, 8];
// let arrnew = arr.sort((a, b) => b - a);
// console.log(arrnew, arrnew[1]);

// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap arr[j] and arr[j+1]
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(arr);
// for(let i=1; i<arr.length; i++) {
//     let temp;
//     if(arr[i-1] > arr[i]) {
//         temp = arr[i-1];
//         arr[i-1] = arr[i];
//         arr[i] = temp;
//     }
// }
// console.log(arr);




// 23. Write a function in JavaScript that removes duplicates from an array.
// let arr = [1,11,1, 4, 5, 6, 4];
// function removeDuplicates(params) {
//     return [...new Set(params)];
// }
// console.log(removeDuplicates(arr));



// 24. Write a function in JavaScript that returns the sum of two numbers without using the + operator.
// function addWithoutPlus(a, b) {
//     while (b !== 0) {
//       const carry = a & b; // Calculate the carry using bitwise AND
//       a = a ^ b;        // Calculate the sum (without carry) using bitwise XOR
//       b = carry << 1;    // Shift the carry to the left by 1 (equivalent to multiplying by 2)
//     }
//     return a;
// }

// // Test cases
// console.log(addWithoutPlus(5, 3));   // Output: 8


// 25. Write a function in JavaScript that checks if a given string is a valid IPv4 address.
// function isValidIPv4(str) {
//     const octets = str.split(".");
//     if (octets.length !== 4) return false;
//     for (let i = 0; i < octets.length; i++) {
//       const octet = octets[i];
//       if (isNaN(octet) || octet < 0 || octet > 255) return false;
//       if (octet.length > 1 && octet[0] === "0") return false;
//     }
//     return true;
// }

// // Example usage:
// console.log(isValidIPv4("192.168.0.1")); // Output: true
// console.log(isValidIPv4("256.0.0.0")); // Output: false
// console.log(isValidIPv4("255.0.0.0")); // Output: true



// 26. Write a function in JavaScript that converts a given string to title case.
// function toTitleCase(str) {
//     return str.replace(/\b\w+/g, function (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });
// }
// // Example usage:
// console.log(toTitleCase("the quick brown fox")); // Output: 'The Quick Brown Fox'



// 27. Write a function in JavaScript that generates a random hexadecimal color code.
// function getRandomColor() {
//     const hexChars = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += hexChars[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Example usage:
// console.log(getRandomColor()); // Output: e.g. '#3D5A89'
  

// let x = 5;
// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);




// const obj = { a: 1, b: 2, c: 3 };
// const { a, b } = obj;
// console.log(a, b);




// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);



// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr2.push(4);

// console.log(arr1);
// console.log(arr2);





// const x = 10;

// function foo() {
//   console.log(x);
//   const x = 20;
// }

// foo();


// const a = [1, 2, 3];
// const b = a;

// b.push(4);

// console.log(a);
// console.log(b);



// const companies = [
//     { id: "1", name: "Facebook" },
//     { id: "2", name: "Apple" },
//     { id: "3", name: "Google" },
//   ];
  
//   companies.sort((a, b) => (a.name > b.name ? -1 : 1));
//   console.log(companies);

  

//   console.log(typeof 42);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof [1, 2, 3]);
// console.log(typeof { name: "John", age: 25 });
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof function () {});




// console.log(getType(42));
// console.log(getType("Hello"));
// console.log(getType(true));
// console.log(getType([1, 2, 3]));
// console.log(getType({ name: "John", age: 25 }));
// console.log(getType(null));
// console.log(getType(undefined));
// console.log(getType(function () {}));

// //The function should print "array" for "[]" and "null" for "null" types.




// function calculateSum() {
//     console.log(result);
//     var num1 = 5;
//     let num2 = 10;
//     const num3 = 15;
//     var result = num1 + num2 + num3;
//   }
  
//   calculateSum();

  


//   let x = 10;

// function updateX() {
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }

// updateX();





// const person = {
//     name: "John",
//     age: 30,
//   };
  
//   Object.freeze(person);
//   person.age = 40;
  
//   console.log(person.age);


  

//   function foo() {
//     let x = 1;
  
//     function bar() {
//       let y = 2;
//       console.log(x + y);
//     }
  
//     bar();
//   }
  
//   foo();

  


//   let x = 10;

// function outer() {
//   console.log(x);

//   if (false) {
//     var x = 20;
//   }
// }

// outer();



// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//       a: 3,
//       b: 4,
//     },
//   };
  
//   const {
//     a,
//     b,
//     c: { a: nestedA },
//   } = obj;
  
//   console.log(a, b, nestedA);

  


//   function* generatorFunction() {
//     yield 1;
//     yield 2;
//     return 3;
//   }
  
//   const generator = generatorFunction();
  
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());

  




//   console.log(sum(4, 6, 8, 10).value); //output - 28
// console.log(sum(4)(6)(8)(10).value); //output - 28




// const fruits = ["banana", "apple", "orange", "grape", "kiwi"];

// // Task 1: Sort the array of fruits in alphabetical order (default behavior)
// // Task 2: Sort the array of fruits in descending alphabetical order
// // Task 3: Sort the array of fruits based on the length of the fruit names in ascending order
// // Task 4: Sort the array of fruits in ascending order by the second character of each fruit name




// let numbers = [1, 2, 3, 4, 5];
// numbers = numbers.map((number) => number * 2);
// console.log(numbers.reduce((total, num) => total + num));




// 47. Write a JavaScript function that takes an array of numbers as input and returns a new array containing 
// only the even numbers.  // *You can't use built-in methods like filter or forEach.


// function findEvenNumbers(numberArray) {
//     const evenNumbers = [];
//     for (let i = 0; i < numberArray.length; i++) {
//       if (numberArray[i] % 2 === 0) {
//         evenNumbers.push(numberArray[i]);
//       }
//     }
//     return evenNumbers;
//   }
  


// function outer() {
//     function inner() {
//       console.log("Inner");
//     }
//     inner(); // Output: Inner
//     function inner() {
//       console.log("Inner 2");
//     }
//     inner(); // Output: Inner 2
// }
// function outer() {
//     console.log('outer 2');        
// }
// outer();


