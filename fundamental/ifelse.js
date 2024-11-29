// Write an if-else statement to check if a number is positive, negative, or zero.
let num = 10; // -2 
let message = '';
if(num===0) {
  message = `given number : ${num} and it is zero`;
}
else if (num<0) {
  message = `given number : ${num} and it is negetive`;
}
else {
  message = `given number : ${num} and it is Positive`;
}
// console.log(message);


// Create an if-else statement to check if a given number is even or odd.
let number = 3;
if(number%2 === 0) {
  message = `given number : ${number} and it is Even number`;
} else {
  message = `given number : ${number} and it is Odd number`;
}
// console.log(message);


// Use an if-else statement to determine if a person is eligible to vote (age >= 18).
let personage = 17; // 18, 20, 21, 17
if(personage >= 18) {
  message = `The age is : ${personage} and person is eligible to vote`;
} else {
  message = `The age is : ${personage} and person is not eligible to vote`;
}
// console.log(message);


// Write an if-else to check if a given year is a leap year or not.

let year = 1991; // 2000
if(year%4 === 0) {
  message = `The given year is : ${year} and it is a leap year`;
} else {
  message = `The given year is : ${year} and it is not a leap year`;
}
// console.log(message);


// Check if a string contains more than 10 characters; if yes, log "Long string", otherwise "Short string".
let string = 'ranvir singh'; // any string
let strlength = string.length;
if(strlength > 10) {
  message = `The given string is : "${string}", length : ${strlength} and it is a "Long string"`;
} else {
  message = `The given string is : "${string}", length : ${strlength} and it is a "Short string"`;
}
// console.log(message);


// Use an if-else statement to check if a number is divisible by both 3 and 5.

let number1 = 20; // 15, 3, 6
if((number1%3===0) && (number1%5===0)) {
  message = `The given number is : "${number1}" and it is divisible by both 3 and 5`;
} else if(number1%3===0){
  message = `The given number is : "${number1}" and it is divisible by 3`;
} else if(number1%5===0){
  message = `The given number is : "${number1}" and it is divisible by 5`;
} else {
  message = `The given number is : "${number1}" and its not divisible by both 3 and 5`;
}
// console.log(message);


// Write an if-else to check if the first letter of a string is uppercase.

let string1 = 'ranvir'; // Ranvir
if(string1[0] == string1[0].toUpperCase()){
  message = `The given string is : "${string1}" and first letter is in uppercase`;
} else {
  message = `The given string is : "${string1}" and first letter is NOT in uppercase`;
}
// console.log(message);


// Use if-else to compare two numbers and log the larger one.

let num1 = 20, num2 = 21; // 15, 3, 6
let largernum = num1;
if(num1 > num2){
  message = `Number1 : "${num1}", Number2 : "${num2}" and ${largernum} is larger one`;
} else {
  largernum = num2;
  message = `Number1 : "${num1}", Number2 : "${num2}" and ${largernum} is larger one`;
}
// console.log(message);


// Check if a given number is between 10 and 20 (inclusive).

let num3 = 10; // 9, 21, 20
if((num3 > 9) && (num3 < 21)){
  message = `Given number : "${num3}" and it is between 10 and 20`;
} else {
  message = `Given number : "${num3}" and it is outside 10 and 20`;
}
console.log(message);


// Write an if-else statement to check if a person qualifies for a senior citizen discount (age >= 60).

let citizenage = 59; // 60
if(citizenage >= 60) {
  message = `The age is : ${citizenage} and citizen is eligible for Discount`;
} else {
  message = `The age is : ${citizenage} and person is not eligible for Discount`;
}
console.log(message);


