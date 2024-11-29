// Use an if-else statement to determine the grade of a student based on their score:
// 90+ = A
// 80–89 = B
// 70–79 = C
// 60–69 = D
// Below 60 = F

let num = 70; // 90 
if((num >= 90) ){
  message = `Marks is "${num}" and Grade is A`;
} 
else if((num >= 80) && (num < 90)){
  message = `Marks is "${num}" and Grade is B`;
}
else if((num >= 70) && (num < 80)){
  message = `Marks is "${num}" and Grade is C`;
}
else if((num >= 60) && (num < 70)){
  message = `Marks is "${num}" and Grade is D`;
}
else {
  message = `Marks is "${num}" and Grade is F`;
}
// console.log(message);


// Write an if-else to determine if a given character is a vowel or consonant.

let vowels = ['a', 'e', 'i', 'o', 'u']; // vowels 
let character = 'v';
if( vowels.includes(character) ){
  message = `Charactor is "${character}" and Its Vowel`;
}
else {
  message = `Charactor is "${character}" and Its Consonent`;
}
// console.log(message);


// Check if the sum of two numbers is greater than 100, less than 100, or exactly 100.
let num1 = 50;
let num2 = 1;
let sum = num1 + num2;
if(sum===100){
  message = `Sum of numbers is "${sum}" and Its exactly 100`;
}
else if(sum >100){
  message = `Sum of numbers is "${sum}" and Its greater than 100`;
} else {
  message = `Sum of numbers is "${sum}" and Its less than 100`;
}
// console.log(message);


// Write an if-else to check if a given string is a palindrome.

let string = 'nitin';
let stringrev = '';
// for (const char of string) {
//     console.log(char);   
// }

// const stringArr = string.split("");
// stringArr.forEach(element => {
//     console.log(element);
// });
let stringrevArr = [];
for(let i=string.length-1; i >= 0; i--) {
    stringrevArr.push(string[i]);
}
stringrev = stringrevArr.join("");

if(string === stringrev ){
    message = `given string is "${string}" and Its palindrome`;
} else {
    message = `given string is "${string}" and Its not palindrome`;
}
// console.log(message);

  
// Use if-else to validate a password (minimum 8 characters, includes a number).

let password = "password1";

function hasNumber(string) {
    let hasnum = false;
    string.split("").forEach(element => {
        // console.log(element);
        if(!isNaN(element)){
            hasnum = true;
        }
    });
    return (hasnum) ? true : false;
}

if((password.length>=8) && (hasNumber(password))) {
    message = `Password is "${password}" and Its minimum 8 characters, includes a number`;
} else {
    message = `Password is "${password}" and its invalid password`;
}
// console.log(message);


// Use an if-else statement to determine if the given time (in hours, 24-hour format) is morning, afternoon, evening, or night.

let time = '5:00';
let timehours = time.split(":")[0];
if((timehours >= 5) && (timehours < 12)) {
    message = `given time is "${time}" and Its Morning`;
}
else if((timehours >= 12) && (timehours < 16)) {
    message = `given time is "${time}" and Its Afternoon`;
}
else if((timehours >= 16) && (timehours < 20)) {
    message = `given time is "${time}" and Its Evening`;
} else {
    message = `given time is "${time}" and Its Night`;
}
// console.log(message);


// Check if a person is eligible to purchase alcohol:
// Age >= 21 (in the USA)
// Age >= 18 (in most countries)

let age = 21;

if((age >= 21)) {
    message = `given age is "${age}" and person is Eligible to purchase alcohol in USA + most countries`;
}
else if((age >= 18)) {
    message = `given age is "${age}" and person is Eligible to purchase alcohol in MOST countries`;
} else {
    message = `given age is "${age}" and person is NOT Eligible to purchase alcohol`;
}
// console.log(message);


// Write an if-else to determine if a given object is empty.

let object = {a:3};
function isEmptyObj(obj) {
    let object = Object.keys(obj);
    return (object.length) ? false : true;
}
if(isEmptyObj(object)){
    message = `Empty object`;
} else {
    message = `Not Empty object`;
}
// console.log(message, object);


// Use if-else to check if a user-provided username contains any special characters.
// let username = "ranvir.sing";
// let username = "ranvirsing";
let username = "ranvirsing#";

function hasSpecialCharacters(username) {
    const specialCharsRegex = /[^\w\s]/g; // Matches any non-word character except whitespace
    return specialCharsRegex.test(username);
}
if(hasSpecialCharacters(username)){
    message = `given username is ${username} and it contains Special character`;
} else {
    message = `given username is ${username} and it does not contains Special character`;
}
console.log(message);

  
// Write an if-else to check if a number is prime or not.
