// 1. For Loop
// =============

// // Write a for loop to print numbers from 1 to 10.
// for (let index = 1; index <= 10; index++) {
//     console.log(index);        
// }


// Write a for loop to print all even numbers between 1 and 20.

// for (let index = 1; index <= 20; index++) {
//     if(index%2===0){
//         console.log(index);
//     }
// }


// Use a for loop to calculate the sum of numbers from 1 to 100.
// let sum = 0
// for (let index = 1; index <= 100; index++) {
//     sum += index
// }
// console.log(sum);


// Write a for loop to print the multiplication table of 5.
// let num = 5
// for (let index = 1; index <= 10; index++) {
//     console.log(`${num} * ${index} = ${num * index}`);
// }


// Write a for loop to reverse a string.
// Example Input: "JavaScript" → Output: "tpircSavaJ"
// let str = "Javascript"
// let revstr = ""
// for (let index = str.length -1; index >= 0; index--) {
//     revstr += str[index]
// }
// console.log(revstr);



// Write a for loop to iterate through an array of numbers and print the square of each number.
// Example: [2, 3, 4] → 4, 9, 16
// let arr = [2,3,4]
// let arr1 = []
// for (const element of arr) {
//     arr1.push(element * element)
// }
// console.log(arr1);


// Use a for loop to find the maximum value in an array of numbers.
// Example: [1, 8, 3, 10] → 10

// let arr = [1, 8, 3, 10, 5]
// let max = arr[0] // let arr[0] is max
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);


// Create a program that stops a for loop when a specific value is found in an array.
// Example: Stop when the number 7 is found in [2, 4, 7, 10].
// let arr = [2, 4, 7, 10]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if(arr[i] == 7) {        
//         break;
//     }
// }


// Write a for loop that skips odd numbers in a range and prints only even numbers.

// for (let index = 1; index <= 10; index++) {
//     if(index%2===0) {
//         console.log(index);        
//     }
// }


// Create a program that uses nested for loops to print a 3x3 grid of *.
// Example Output:
// * * *
// * * *
// * * *
// let str = ''
// for (let index = 0; index < 3; index++) {
//     for(let j=0; j<3; j++) {
//         str += "*"
//     }
//     str += "\n"
// }
// console.log(str);



// 2. While Loop
// ====================

// Write a while loop to print numbers from 1 to 10.
// let num = 1 ; // init
// while (num <= 10) {
//     console.log(num);
//     num++;   // increment
// }


// Write a while loop to print all numbers divisible by 5 from 1 to 50.
// let num = 1;
// while(num <= 50) {
//     if(num%5===0) {
//         console.log(num);        
//     }
//     num ++
// } 


// Use a while loop to calculate the factorial of a number.
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
// let num = 5;
// let factorial = 1;
// while(num>0) {
//     factorial *= num;
//     num--;
// }
// console.log(factorial)


// Write a while loop to print the digits of a number in reverse order.
// Example Input: 12345 → Output: 54321

// let digits = 12345
// let digitsStr = digits.toString()
// let digitsrev = ''
// let length = digitsStr.length - 1 // string length -1 because index starts from 0
// while(length>=0) {
//     digitsrev += digitsStr[length]
//     length--;
// }
// console.log(digitsrev);


// Use a while loop to find the sum of digits of a number.
// Example Input: 123 → Output: 6
// let sum = 0, num = 123
// let numstr = num.toString()
// let maxlength = numstr.length
// let i = 0
// while (i < maxlength) {
//     sum += parseInt(numstr[i]) // convert string to number
//     i++
// }
// console.log(sum);


// Write a while loop to keep generating random numbers between 1 and 10 until the number 7 is generated.
// while (true) {
//     let randomnum = Math.floor(Math.random() * 10) + 1
//     console.log(`generated number is ${randomnum}`);
//     if(randomnum===7){
//         console.log(`number ${randomnum} is generated, exiting the loop`);
//         break;
//     }
// }


// Use a while loop to remove elements from an array one by one until it is empty.
// let arr = [1,2,3,4]
// while(arr.length > 0) {
//     arr.pop()
// }
// console.log(arr);



// Write a while loop that keeps prompting the user for input until they type "exit".
// let input = "exit"
// while(true) {
//     console.log(`user typed ${input}`);
//     if(input==='exit') {
//         console.log(`user typed ${input}, so exiting from loop`);
//         break;
//     }
// }


// Create a program using a while loop that doubles a number until it is greater than or equal to 1000.
// Example Input: 5 → Output: 5, 10, 20, 40, 80, 160, 320, 640, 1280
// let num = 5, numdouble = 1
// while(numdouble <= 1000) {
//     numdouble = num * 2
//     num = numdouble
//     console.log(numdouble);
// }


// Write a while loop to print all characters of a string, one per line.
// let str = "ranvir", i = 0
// while (i < str.length) {
//     console.log(str[i]);
//     i++;
// }



// 3. Do-While Loop
// =================


// Write a do-while loop to print numbers from 1 to 10.
// let num = 1
// do {
//     console.log(num);
//     num++;
// } while (num <= 10);


// Write a do-while loop to calculate the sum of numbers entered by the user until they enter 0.
// let sum = 0;
// let number;
// do {
//   number = Math.floor(Math.random() * 10); // did not add 1 here because we need 0 as well randomly
//   sum += number;
// } while (number !== 0);
// console.log("The sum of the numbers is:", sum);


// Use a do-while loop to print all even numbers between 1 and 20.
// let num = 1
// do {
//     if(num%2===0)
//     console.log(num);
//     num++;
// } while (num<=20);


// Write a do-while loop to count the number of digits in a number.
// Example Input: 12345 → Output: 5
// let n = 123, count = 0
// do{
//     n = Math.floor(n/10);
//     count++;
// }while(n > 0)
//     console.log(count);


// Write a do-while loop to generate a sequence of numbers where each number is double the previous one, 
// starting at 1. Stop when the number exceeds 100.
// let num = 1
// do {
//     num = num*2
//     console.log(num);
// } while (num < 100);


// Write a do-while loop to remove all occurrences of a specific value from an array.
// let arr = [1,2,3,2,4,5]
// let removenum = 2
// let i =0 
// do {
//     if(arr[i]==removenum) {
//         arr.splice(i, 1); // start from index and 2nd param how many element to remove, in this case 1 element should remove
//     } else {
//         i++;
//     }
// } while (i<arr.length);
// console.log(arr);


// Use a do-while loop to reverse an array without using the reverse() method.
// Example Input: [1, 2, 3] → Output: [3, 2, 1]
// let arr = [1,2,3]
// let i = arr.length-1
// let arr1 = []
// // console.log(arr.reverse());
// do {
//     arr1.push(arr[i])
//     i--;
// } while (i>=0);
// console.log(arr1);


// Write a do-while loop to count the number of vowels in a given string.
// Example Input: "Hello World" → Output: 3
// let str = "hello worlda"
// let vowels = ['a', 'e', 'i', 'o', 'u']
// let vowelscount = 0
// let i = 0
// do {
//     if(vowels.includes(str[i])){
//         vowelscount++;
//     }
//     i++;
// } while (i<str.length);
// console.log(vowelscount);



// 4. For...Of Loop
// ====================

// Use a for...of loop to iterate through an array of numbers and print each one.
// let arr = [2,3,4]
// for (const element of arr) {
//     console.log(`${element}`);
// }
// Note : const element in arr (this will print index)


// Write a for...of loop to concatenate all elements in an array into a single string.
// Example Input: ["I", "love", "JavaScript"] → Output: "I love JavaScript"
// let array = ["I", "love", "JavaScript"];
// let str = ''
// for (const element of array) {
//     str += " "+element
// }
// console.log(str.trim());


// Use a for...of loop to print all characters in a string, one per line.
// let str = 'ranvir'
// for (const element of str.split("")) {
//     console.log(element);
// }


// Write a for...of loop to calculate the sum of all numbers in an array.
// let array = [1, 2, 3, 4];
// let sum = 0;
// for (const element of array) {
//     sum += element
// }
// console.log(sum);


// Use a for...of loop to filter all even numbers from an array and print them.
// let array = [1, 2, 3, 4];
// for (const element of array) {
//     if(element%2===0) {
//         console.log(element);
//     }
// }


// Create a for...of loop to iterate through a Map object and print its keys and values.
// const myMap = new Map();
// myMap.set('apple', 10);
// myMap.set('banana', 20);
// myMap.set('orange', 30);

// for (const [key, value] of myMap) {
//   console.log(`Key: ${key}, Value: ${value}`);
// //   console.log(`Key: ${key}, Value: ${key}`);
// }


// Write a for...of loop to find the longest word in an array of strings.
// Example Input: ["apple", "banana", "cherry"] → Output: "banana"
// let array = ["apple", "banana", "cherry"];
// let longest = array[0]
// for (const element of array) {
//     if(longest.length < element.length ) {
//         longest = element;
//     }
// }
// console.log(longest);


// Use a for...of loop to iterate through a Set object and print each element.
// const mySet = new Set([1, 2, 3, 2, 1, 5]);
// for (const element of mySet) {
//     console.log(element);
// }


// Write a for...of loop to double all numbers in an array and create a new array.
// Example Input: [1, 2, 3] → Output: [2, 4, 6]
// let arr = [1,2,3]
// let arr1 = []
// for (const element of arr) {
//     arr1.push(element*2)
// }
// console.log(arr1);



// Write a for...of loop to iterate through an array of objects and print a specific property of each object.
// Example Input: const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// for (const element of users) {
//     console.log(`${element.name}`);
// }



// 5. For...In Loop
// =================

// Use a for...in loop to iterate through the properties of an object and print each property name and value.
// const user = { name: "Ranvir", age : 33, city : 'Delhi' };
// for (const key in user) {
//     // option 1
//     console.log(`${key} : ${user[key]}`);
//     // option 2
//     // if (Object.prototype.hasOwnProperty.call(user, key)) {
//     //     const element = user[key];
//     //     console.log(element);        
//     // }
// }


// Write a for...in loop to count the number of properties in an object.
// const user = { name: "Ranvir", age : 33, city : 'Delhi' };
// let count = 0;
// for (const key in user) {
//     count++;
// }
// console.log(count);


// Create a for...in loop to copy all properties from one object to another.
// const user = { name: "Ranvir", age : 33, city : 'Delhi' };
// const user1 = {};
// for (const key in user) {
//     user1[key] = user[key];
// }
// console.log(user1);


// Write a for...in loop to check if a specific property exists in an object.
// Example: Check if "age" exists in { name: "Alice", age: 25 }.
// const user = { name: "Ranvir", age : 33, city : 'Delhi' };
// const keytocheck = 'aged'
// let isExists = false;

// for (const key in user) {
//     if(key === keytocheck){
//         isExists = true
//     }
// }
// if(isExists) {
//     console.log(`given key = ${keytocheck} and it exists in object`);
// } else {
//     console.log(`given key = ${keytocheck} and it does not exists in object`);
// }


// Use a for...in loop to iterate through the indices of an array and print each index and its corresponding value.
// let arr = ["apple", "banana", "grapes"];
// for (const key in arr) {
//     console.log(arr[key]);
// }


// Write a for...in loop to convert all string values in an object to uppercase.
// Example Input: { name: "Alice", city: "New York" } → Output: { name: "ALICE", city: "NEW YORK" }
// const user = { name: "Alice", city: "New York" };
// const user1 = {};
// for (const key in user) {
//     user[key] = user[key].toUpperCase();   
// }
// console.log(user);


// Use a for...in loop to calculate the total of all numeric properties in an object.
// Example: { a: 5, b: 10, c: "hello" } → Output: 15
// const user = { a: 5, b: 10, c: "hello" };
// let sum = 0;
// for (const key in user) {
//     if(typeof user[key]=== 'number'){
//         sum += user[key];
//     }
// }
// console.log(sum);


// Write a for...in loop to count how many times each character appears in a string.
// Example Input: "hello" → Output: { h: 1, e: 1, l: 2, o: 1 }

// function countCharacterOccurrences(str) {
//     const charCount = {};
//     for (const char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return charCount;
// }

// const inputString = "helloo";
// const characterCounts = countCharacterOccurrences(inputString);
// console.log(characterCounts);


// Use a for...in loop to iterate through an object and remove all properties with a value of null or undefined.
// let e;
// let object = { a: 5, b: 10, c: "hello", d : null, e }
// for (const key in object) {
//     if((object[key] === null) || (object[key] === undefined)) {
//         delete object[key];
//     }
// }
// console.log(object);


// Write a for...in loop to iterate through a nested object and print all property names and values.
// Example Input: const obj = { name: "Alice", details: { age: 25, city: "New York" } };
// const obj = { name: "Alice", details: { age: 25, city: "New York" } };
// let obj2 = {}
// for(const key in obj) {
//     if(typeof obj[key] === 'object'){
//         obj2 = obj[key];
//         for(const k in obj2){
//             console.log(`key=${k} : value=${obj2[k]}`);
//         }
//     } else {
//         console.log(`outer key=${key} : value=${obj[key]}`);
//     }
// }

// using recursive function
const nestedObject = { name: "Alice", details: { age: 25, city: "New York" } };

// function printObject(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] === 'object') {
//             console.log(`${key}:`);
//             printObject(obj[key]); // Recursively print nested objects
//         } else {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }
// printObject(nestedObject);