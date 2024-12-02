// 1. If Statements
// =====================

// Write an if statement to check if a given number is positive.
// Example Input: 5 → Expected Output: "The number is positive."
// let num = 5
// if(num>=0) {
//     console.log("the number is positive");    
// }


// Write an if statement to check if a number is divisible by 3.
// Example Input: 9 → Expected Output: "The number is divisible by 3."
// let n = 9
// if(n%3===0){
//     console.log("The number is divisible by 3.");    
// }


// What happens if you forget to put curly braces {} around the block of code inside an if statement? Demonstrate with an example.
// if we forget to put braces then the scope of if will be only one / next line
// if(2==20)
//     console.log('if block');
// console.log('outside if block');
    

// Write an if statement to check if a variable contains a truthy value.
// let value = "Hello"; // Check if the value is truthy
// if(value)
//     console.log(`Value is not empty`);    


// Create a program to check if a number is greater than 100. If true, print "Large number."
// let num = 101;
// if(num>100)
//     console.log(`large number`);
    

// Write an if statement to check if a string contains the word "JavaScript".
// Example Input: "I love JavaScript" → Expected Output: "JavaScript found!"
// let str = "I love javascript";
// if(str.includes("javascript"))
//     console.log("Javascript found!");
    

// What is the output of this code?
// let num = 7;
// if (num % 2 === 0) 
//     console.log("Even number");
// else 
//     console.log("Odd number");


// Write an if statement to check if a variable is undefined.
// let data;
// if(typeof data === 'undefined')
//     console.log(`the variable is undefined`);


// Create a program that checks if the current hour (using new Date().getHours()) is between 6 and 12. If true, print "Good Morning."
// let hour = new Date().getHours()
// if((hour > 5) && (hour < 13) ) {
//     console.log("Good morning");
// }



// 2. If-Else Statements
// ============================

// Write an if-else statement to determine if a number is even or odd.
// Example Input: 7 → Expected Output: "Odd number."
// let num = 7
// if(num%2===0) {
//     console.log('Even number');
// } else {
//     console.log('Odd number');
// }


// Write an if-else statement to check if a user has enough money to purchase an item.
// let userMoney = 50;
// let itemPrice = 40;
// if(userMoney >= itemPrice) {
//     console.log("user has enough money");    
// }
// else {
//     console.log("user has not enough money");
// }


// Write a program to check if a student has passed or failed. (Passing marks are 40 or higher.)
// let marks = 39
// if(marks>= 40) {
//     console.log("pass");    
// } else {
//     console.log('failed');    
// }


// What is the output of the following code?
// let x = "10";
// if (x === 10) {
//     console.log("Strictly Equal");
// } else {
//     console.log("Not Strictly Equal");
// }


// Write an if-else program to check if a string is empty or not.
// let str = "w"
// if(str.length>0) {
//     console.log(`string is not empty`);    
// }
// else {
//     console.log(`string is empty`);
// }


// Create a program that determines the grade of a student based on their marks:
// If marks are greater than or equal to 90, print "A."
// If marks are between 80 and 89, print "B."
// Otherwise, print "Fail."
// let marks = 80
// if(marks>= 90) {
//     console.log(`Grade A`);
// }
// else if((marks>=80) && (marks<90)) {
//     console.log(`Grade B`);    
// } else {
//     console.log(`Fail`);    
// }


// What happens if you use return inside an if-else block? Demonstrate with an example.
// control will skip the below of return part in if block, it will jump out of if block
// if(true) {
//     return
//     console.log('inside if block');    
// }


// Write an if-else program to determine if the given year is a leap year. (Hint: A year is a leap year if it is divisible by 4 and not divisible by 100, or divisible by 400.)
// let year = 2025
// if(year%4===0) {
//     console.log(`Leap year`);
// } else {
//     console.log(`Not leap year`);
// }


// Create an if-else program that checks the type of a variable and prints whether it is a number, string, or boolean.
// let variable = false
// if(typeof variable === 'string') {
//     console.log(`Variable is String`);    
// }
// else if(typeof variable === 'number') {
//     console.log(`Variable is Number`);   
// }
// else if(typeof variable === 'boolean') {
//     console.log(`Variable is Boolean`);    
// }


// 3. Switch Statements
// =====================

// Write a switch statement to print the day of the week based on a number (1 = Sunday, 2 = Monday, etc.).
// let day = 2
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;        
//     default:
//         console.log("Unknown day");
//         break;
// }


// Create a switch program to handle different mathematical operations:
// If the user inputs "+", add two numbers.
// If the user inputs "-", subtract two numbers.
// If the user inputs any other symbol, print "Invalid operation."
// let opr = "-"
// let a = 10, b = 5
// switch(opr) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   default:
//     console.log("Invalid operation");
//     break;
// }



// Write a switch program that checks the value of a fruit name and prints its color.
// Example:
// "Apple" → "Red"
// "Banana" → "Yellow"
// "Orange" → "Orange"
// let fruit = "apple"
// switch(fruit) {
//     case "apple":
//         console.log("red");
//         break;
//     case "banana":
//         console.log("yellow");
//         break;
//     case "orange":
//         console.log("orange");
//         break;
// }



// What happens if you forget the break keyword in a switch case? Demonstrate with an example.
// control will not break and it continues to check next case and execute till break statement
// let num = 1
// switch(num) {
//     case 1:
//         console.log("One");
//     case 2:
//         console.log("two");        
//     case 3:
//         console.log("three");
//         break;
//     case 4:
//         console.log("three");
//         break;        
// }


// What is the output of this code?
// let score = 2;
// switch (score) {
//     case 1:
//         console.log("Low");
//         break;
//     case 2:
//         console.log("Medium");
//     case 3:
//         console.log("High");
//         break;
//     default:
//         console.log("Unknown");
// }


// Write a switch statement to determine the type of weather based on input.
// Example:
// "Sunny" → "Wear sunglasses."
// "Rainy" → "Carry an umbrella."
// "Cold" → "Wear a jacket."
// let word = "sunny"
// switch(word) {
//     case "sunny":
//         console.log("wear sunglasses");
//         break;
//     case "rainy":
//         console.log("carry an umbrella");
//         break;
//     case "cold":
//         console.log("wear a jacket");
//         break;
// }

// Can you use expressions in case labels in a switch statement? Show an example.
// let a = 10, b =5
// switch(a*b) {
//     case 50:
//         console.log(`the product of a and b is 50`);
//         break;
//     default:
//         console.log(`the product is not 50`);
//         break;
// }


// Create a switch program that categorizes animals into groups:
// "Dog", "Cat" → "Mammals"
// "Eagle", "Parrot" → "Birds"
// "Snake", "Crocodile" → "Reptiles"
// let animal = "parrot"
// switch(animal) {
//     case "cat":
//     case "dog":
//         console.log("mammals");
//         break;
//     case "eagle":
//     case "parrot":
//         console.log("birds");
//         break;
//     case "snake":
//     case "crocodile":
//         console.log("reptiles");
//         break;                                            
//     default:
//         console.log("undefined or invalid");
//         break;        
// }


// Write a switch program to determine the price of a product based on its name.
// Example:
// "Milk" → "$5"
// "Bread" → "$3"
// "Eggs" → "$2"
// let product = "bread"
// switch(product) {
//     case "milk":
//         console.log("$5");
//         break;
//     case "bread":
//         console.log("$3");
//         break;    
//     case "eggs":
//         console.log("$2");
//         break;    
// }