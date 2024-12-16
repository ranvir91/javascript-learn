// JavaScript object methods with examples:

// 1. Object.keys()
// Returns an array of the object's own enumerable property names (keys).
// const user = { name: "Ranvir", age: 25, city: "New Delhi" };
// const keys = Object.keys(user);
// console.log(keys); // ['name', 'age', 'city']

// 2. Object.values()
// Returns an array of the object's own enumerable property values.
// const user = { name: "Ranvir", age: 25, city: "New Delhi" };
// const values = Object.values(user);
// console.log(values); // ['Ranvir', 25, 'New Delhi']

// 3. Object.entries()
// Returns an array of the object's own enumerable key-value pairs as nested arrays.
// const user = { name: "Ranvir", age: 25, city: "New Delhi" };
// const entries = Object.entries(user);
// console.log(entries);
// // [['name', 'Ranvir'], ['age', 25], ['city', 'New Delhi']]

// 4. Object.fromEntries()
// Converts an array of key-value pairs into an object.
// const entries = [['name', 'Ranvir'], ['age', 25], ['city', 'New Delhi']];
// const user = Object.fromEntries(entries);
// console.log(user); // { name: 'Ranvir', age: 25, city: 'New Delhi' }

// 5. Object.assign()
// Copies the values of all enumerable own properties from one or more source objects to a target object.
// const target = { name: "Ranvir" };
// const source = { age: 25, city: "New Delhi" };
// const ob = {misc : 'test'}
// const merged = Object.assign(target, source, ob);
// console.log(merged); // { name: 'Ranvir', age: 25, city: 'New Delhi' }

// 6. Object.create()
// Creates a new object with the specified prototype object and properties.
// const person = { greet: function() { console.log("Hello!"); } };
// const user = Object.create(person);
// user.name = "Ranvir";
// user.greet(); // Hello!
// console.log(user); // { name: 'Ranvir' }

// 7. Object.freeze()
// Freezes an object, making it immutable (i.e., you cannot add, update, or delete properties).
// const user = { name: "Ranvir" };
// Object.freeze(user);
// user.age = 25; // Fails silently
// user.name = "Bob"; // Fails silently
// console.log(user); // { name: 'Ranvir' }

// 8. Object.seal()
// Seals an object, allowing updates to existing properties but preventing the addition or deletion of properties.
// const user = { name: "Ranvir" };
// Object.seal(user);
// user.age = 25; // Fails silently
// user.name = "Bob"; // Allowed
// console.log(user); // { name: 'Bob' }

// 9. Object.is()
// Compares two values to determine if they are the same (like ===, but handles special cases like NaN).
// console.log(Object.is(25, 25)); // true
// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(0, -0)); // false

// 10. Object.getOwnPropertyNames()
// Returns an array of all properties (enumerable or non-enumerable) of an object.
// const user = { name: "Ranvir", age: 25 };
// Object.defineProperty(user, "hidden", { value: true, enumerable: false });
// const props = Object.getOwnPropertyNames(user);
// console.log(props); // ['name', 'age', 'hidden']

// 11. Object.getOwnPropertyDescriptors()
// Returns all property descriptors of an object.
// const user = { name: "Ranvir", age: 25 };
// const descriptors = Object.getOwnPropertyDescriptors(user);
// console.log(descriptors);
// /*
// {
//   name: { value: 'Ranvir', writable: true, enumerable: true, configurable: true },
//   age: { value: 25, writable: true, enumerable: true, configurable: true }
// }
// */

// 12. Object.hasOwnProperty()
// Checks if the object has the specified property as its own property (not inherited).
// const user = { name: "Ranvir", age: 25 };
// console.log(user.hasOwnProperty("name")); // true
// console.log(user.hasOwnProperty("toString")); // false (inherited from prototype)

// 13. Object.getPrototypeOf()
// Returns the prototype of the object.
// const user = { name: "Ranvir" };
// const proto = Object.getPrototypeOf(user);
// console.log(proto); // {} (default Object prototype)

// 14. Object.setPrototypeOf()
// Sets the prototype of the object.
// const person = { greet: function() { console.log("Hello!"); } };
// const user = { name: "Ranvir" };
// Object.setPrototypeOf(user, person);
// user.greet(); // Hello!

// 15. Object.isExtensible()
// Checks if new properties can be added to the object.
// const user = { name: "Ranvir" };
// console.log(Object.isExtensible(user)); // true
// Object.preventExtensions(user);
// console.log(Object.isExtensible(user)); // false

// 16. Object.preventExtensions()
// Prevents the addition of new properties to the object.
// const user = { name: "Ranvir" };
// Object.preventExtensions(user);
// user.age = 25; // Fails silently
// console.log(user); // { name: 'Ranvir' }

// 17. Object.keys() vs Object.entries() vs Object.values()
// Use cases:
// Object.keys() gives an array of keys.
// Object.values() gives an array of values.
// Object.entries() gives key-value pairs.
// const user = { name: "Ranvir", age: 25 };
// console.log(Object.keys(user)); // ['name', 'age']
// console.log(Object.values(user)); // ['Ranvir', 25]
// console.log(Object.entries(user)); // [['name', 'Ranvir'], ['age', 25]]

// 18. Object.defineProperty()
// Adds or modifies a property of an object with specific descriptors.
// const user = {};
// Object.defineProperty(user, "name", { value: "Ranvir", writable: false });
// console.log(user.name); // 'Ranvir'
// user.name = "Bob"; // Fails silently
// console.log(user.name); // 'Ranvir'

// 19. Object.defineProperties()
// Defines multiple properties on an object with descriptors.
// const user = {};
// Object.defineProperties(user, {
//   name: { value: "Ranvir", writable: true },
//   age: { value: 25, writable: false }
// });
// console.log(user); // { name: 'Ranvir', age: 25 }

// 20. Object.toString()
// Returns a string representation of the object.
// const user = { name: "Ranvir" };
// console.log(user.toString()); // [object Object]
