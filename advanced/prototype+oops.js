// Prototype Chain in JavaScript
// The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, every object has a prototype from which it can inherit properties. This chain continues until it reaches null, which is the root of all objects.

// Key Concepts:
// Objects in JavaScript can access properties and methods from their own prototype.
// If a property or method is not found in the current object, the JavaScript engine searches for it in the prototype chain.
// Example of Prototype Chain
// javascript
// Copy code
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const person1 = new Person("John");

// person1.sayHello(); // Output: Hello, my name is John

// console.log(person1.__proto__ === Person.prototype); // true
// console.log(Person.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__ === null); // true
// Explanation:

// Person is a constructor function, and sayHello is defined on its prototype.
// person1 inherits the sayHello method from Person.prototype.
// If the property or method isn't found on person1, the engine looks at Person.prototype.
// The chain continues to Object.prototype, and finally reaches null.
// Extending the Prototype Chain
// You can extend an object's prototype to create a chain of inheritance.

// javascript
// Copy code
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a sound`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name); // Call the parent constructor
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype); // Set up prototype inheritance
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log(`${this.name} barks!`);
// };

// const myDog = new Dog("Buddy", "Golden Retriever");

// myDog.speak(); // Output: Buddy makes a sound
// myDog.bark();  // Output: Buddy barks!
// Explanation:

// Dog inherits from Animal using Object.create(Animal.prototype).
// myDog can access methods from both Dog.prototype and Animal.prototype through the prototype chain.


// ================================================
// Object-Oriented Programming (OOP) in JavaScript
// ================================================

// JavaScript introduced the class syntax in ES6 to provide a more readable and 
// structured way to implement object-oriented programming.

// Key Concepts of OOP:
// Class: A blueprint for creating objects.
// Constructor: A special method for initializing objects.
// Inheritance: Using the extends keyword to inherit properties and methods.
// super: Refers to the parent class and is used to call parent class methods.
// Example of Class, extends, and super

// // Base class (Parent)
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// // Subclass (Child) inheriting from Animal
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Call the parent class constructor
//     this.breed = breed;
//   }

//   bark() {
//     console.log(`${this.name} the ${this.breed} barks loudly!`);
//   }

//   // Overriding a method from the parent class
//   speak() {
//     console.log(`${this.name} says woof!`);
//   }
// }

// // Create an instance of Dog
// const myDog = new Dog("Buddy", "Golden Retriever");

// myDog.speak(); // Output: Buddy says woof!
// myDog.bark();  // Output: Buddy the Golden Retriever barks loudly!

// Explanation of the Code
// class Animal:
// A class Animal is defined with a constructor to initialize the name property.
// The method speak is available to all instances of Animal.
// Inheritance with extends:

// class Dog extends Animal, which means it inherits properties and methods from the Animal class.
// super():

// In the Dog class, super(name) calls the constructor of the parent class (Animal) to initialize the name property.
// Overriding Methods:

// The speak method in Dog overrides the speak method in Animal.
// Child Class Method:

// The bark method is defined specifically for the Dog class.
// Example: Encapsulation Using Classes
// Classes allow encapsulation, where properties are hidden and accessed only through methods.

// class User {
//   #password; // Private field (ES2020)

//   constructor(username, password) {
//     this.username = username;
//     this.#password = password;
//   }

//   validatePassword(inputPassword) {
//     return inputPassword === this.#password;
//   }
// }

// const user = new User("john_doe", "12345");

// console.log(user.username); // Output: john_doe
// console.log(user.validatePassword("12345")); // Output: true
// console.log(user.#password); // Syntax Error: Private field '#password' must be declared in an enclosing class

// Explanation:
// The #password is a private field, accessible only within the class.
// Direct access to #password outside the class results in an error.
// Summary
// Prototype Chain:

// Allows objects to inherit properties and methods from their prototypes.
// Involves a chain of references that eventually leads to null.

// Object-Oriented Programming:
// class provides a blueprint for creating objects.
// extends is used for inheritance.
// super calls the parent class's constructor or methods.
// Encapsulation can be achieved using private fields.
// By combining the prototype chain and modern OOP features (class, extends, super),
// JavaScript provides robust and flexible ways to structure and organize code.
