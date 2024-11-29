// Declare a variable using var and assign it the value of your name. Log it to the console.
// Create a variable using let and assign it the value of your age. Log it to the console.
// Declare a constant using const to store the value of Pi (3.14). Try to reassign it and observe what happens.
// Use var to declare a variable inside a function. Can it be accessed outside the function? Why or why not?
// Use let to declare a variable inside a block ({}) and try to access it outside the block. What happens?
// What will happen if you declare two variables with the same name using var? Try it.
// What will happen if you declare two variables with the same name using let? Try it.
// What will happen if you declare a const without assigning it a value? Why?
// Use let to declare a variable, assign it a value, then change its value later. Is it allowed?
// Write a small code snippet using var, let, and const together and explain the difference in their scopes.

var name = "ranvir singh";
let age = 33;
const pi = 3.14;

name = "rv";
age = 30;
// pi = 3;

// console.log(name, age, pi);

function namef() {
    name = 'rrrrrrr';
    age = 3;
    console.log(name, age);
    var name1 = 'ranvir s';
    let address = "indore 409";
}

// namef()
// console.log(age);

// var email = 'ran@vir'
// var email = 'test@test.com'
// console.log(email);

// let email = 'ran@vir'
// let email = 'test@test.com'
// console.log(email);

// const constvar; // const declarations must be initialized




