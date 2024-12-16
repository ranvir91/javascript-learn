// 1. Adding/Removing Elements
// ===========================
// push()
// Adds one or more elements to the end of the array.
// let fruits = ['apple', 'banana'];
// fruits.push('mango', 'orange');
// console.log(fruits); // ['apple', 'banana', 'mango', 'orange']

// pop()
// Removes the last element from the array and returns it.
// let fruits = ['apple', 'banana', 'mango'];
// let lastFruit = fruits.pop();
// console.log(fruits); // ['apple', 'banana']
// console.log(lastFruit); // 'mango'

// unshift()
// Adds one or more elements to the beginning of the array.
// let fruits = ['banana', 'mango'];
// fruits.unshift('apple', 'orange');
// console.log(fruits); // ['apple', 'orange', 'banana', 'mango']

// shift()
// Removes the first element from the array and returns it.
// let fruits = ['apple', 'banana', 'mango'];
// let firstFruit = fruits.shift();
// console.log(fruits); // ['banana', 'mango']
// console.log(firstFruit); // 'apple'

// splice()
// Adds or removes elements at a specific position.
// let fruits = ['apple', 'banana', 'mango'];
// fruits.splice(1, 1, 'orange', 'grape'); // Removes 1 element at index 1 and adds 'orange' and 'grape'
// console.log(fruits); // ['apple', 'orange', 'grape', 'mango']

// concat()
// Merges two or more arrays.
// let fruits = ['apple', 'banana'];
// let vegetables = ['carrot', 'broccoli'];
// let combined = fruits.concat(vegetables);
// console.log(combined); // ['apple', 'banana', 'carrot', 'broccoli']


// 2. Iterating Through Elements
// =============================
// forEach()
// Executes a provided function for each element in the array.
// let fruits = ['apple', 'banana', 'mango'];
// fruits.forEach((fruit) => {console.log(fruit)}); // Output: 'apple', 'banana', 'mango'

// map()
// Creates a new array by transforming every element using the provided function.
// let numbers = [1, 2, 3];
// let squares = numbers.map(num => num * num);
// // let doublenum = numbers.map((num) => {return num * 2});
// let doublenum = numbers.map((num) => num * 2 );
// console.log(squares, doublenum); // [1, 4, 9] , [2, 4, 6]


// 3. Searching Elements
// =====================
// find()
// Returns the first element that satisfies a given condition.
// let numbers = [10, 20, 30, 40];
// let greaterThan25 = numbers.find(num => num > 25);
// console.log(greaterThan25); // 30

// findIndex()
// Returns the index of the first element that satisfies a given condition.
// let numbers = [10, 20, 30, 40];
// let index = numbers.findIndex(num => num > 25);
// console.log(index); // 2

// indexOf()
// Returns the first index of a given element or -1 if not found.
// let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits.indexOf('banana')); // 1
// console.log(fruits.indexOf('orange')); // -1

// lastIndexOf()
// Returns the last index of a given element.
// let numbers = [1, 2, 3, 22, 1];
// console.log(numbers.lastIndexOf(22)); // 3

// includes()
// Checks if an array contains a specific element.
// let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits.includes('banana')); // true
// console.log(fruits.includes('orange')); // false


// 4. Sorting and Reversing
// ========================
// sort()
// Sorts the elements of an array in place.
// let numbers = [30, 10, 20];
// numbers.sort();
// console.log(numbers); // [10, 20, 30]

// reverse()
// Reverses the order of elements in an array.
// let fruits = ['apple', 'banana', 'mango'];
// fruits.reverse();
// console.log(fruits); // ['mango', 'banana', 'apple']


// 5. Extracting and Joining
// =========================
// slice()
// Returns a shallow copy of a portion of an array.
// let fruits = ['apple', 'banana', 'mango', 'orange'];
// let sliced = fruits.slice(1, 3); // Extract elements from index 1 to 3 (exclusive)
// console.log(sliced); // ['banana', 'mango']

// join()
// Joins all array elements into a string.
// let fruits = ['apple', 'banana', 'mango'];
// let result = fruits.join(', ');
// console.log(result); // 'apple, banana, mango'


// 6. Testing Elements
// ===================
// every()
// Returns true if all elements satisfy a condition.
// let numbers = [2, 4, 6]; // true
// let numbers = [2, 3, 6]; // false
// console.log(numbers.every(num => num % 2 === 0)); // true

// some()
// Returns true if at least one element satisfies a condition.
// let numbers = [1, 2, 3];
// console.log(numbers.some(num => num % 2 === 0)); // true


// 7. Reducing an Array
// ====================
// reduce()
// Reduces the array to a single value by applying a function.
// let array = [2, 2, 4, 12];
// let sum = array.reduce((accumulate, sum)=> accumulate + sum, 0);
// console.log(sum); // 20

// reduceRight()
// Same as reduce, but processes the array from right to left.
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduceRight((acc, num) => acc + num, 0);
// console.log(sum); // 10


// 8. Other Array Methods
// ======================
// filter()
// Creates a new array with all elements that pass a test.
// let numbers = [2, 3, 4, 5, 6];
// let filetered = numbers.filter(num => num%2===0);
// console.log(filetered); // [2, 4, 6]

// flat()
// Flattens nested arrays into a single array.
// let nestedArray = [1, [2, 3], [4, [5]]];
// console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5]

// flatMap()
// Maps and flattens an array in one step.
// let numbers = [1, 2, 3];
// let result = numbers.flatMap(num => [num, num * 2]);
// console.log(result); // [1, 2, 2, 4, 3, 6]

// fill()
// Fills all elements in an array with a static value.
// let numbers = [1, 2, 3];
// numbers.fill(0);
// console.log(numbers); // [0, 0, 0]

// Array.from()
// Creates an array from an iterable object.
// let str = 'hello';
// let arr = Array.from(str);
// console.log(arr); // ['h', 'e', 'l', 'l', 'o']

// Array.isArray()
// Checks if a given value is an array.
// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray('hello')); // false
// These methods help manipulate and traverse arrays efficiently in JavaScript!