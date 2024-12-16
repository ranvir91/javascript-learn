// Basic Questions
// ================

// 1. How does document.getElementById() work, and what does it return if no element is found?
// document.getElementById() is a JavaScript method used to access an HTML element by its ID attribute. 
// It returns a reference to the element if found, and null if the element with the specified ID doesn't exist.
// Example:
// const element = document.getElementById("myElement");

// 2. What is the difference between querySelector and querySelectorAll? Provide examples for both.
// querySelector: Selects the first element that matches the specified CSS selector.
// querySelectorAll: Selects all elements that match the specified CSS selector and returns an HTMLCollection.

// Example:
// querySelector
// const firstParagraph = document.querySelector("p"); // Selects the first paragraph
// querySelectorAll
// const allParagraphs = document.querySelectorAll("p"); // Selects all paragraphs


// 3. Can getElementById be used to select multiple elements? Why or why not?
// No, getElementById can only select a single element. This is because HTML elements must have unique IDs.

// 4. How do you select elements by class name? Explain the use of document.getElementsByClassName with an example.
// document.getElementsByClassName() is used to select elements by their class name. 
// It returns an HTMLCollection of all elements with the specified class name.
// Example:
// const elementsWithClass = document.getElementsByClassName("myClass");

// 5. What does querySelector do if there are multiple elements matching the selector?
// querySelector selects only the first element that matches the specified CSS selector. If there are multiple elements, it returns the first one.


// Advanced Questions
// ==================

// 6. Selecting and Modifying <p> Tags
// const paragraphs = document.querySelectorAll('p');

// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].textContent = "Hello, World!";
// }


// 7. getElementsByTagName vs. querySelectorAll
// getElementsByTagName: Returns an HTMLCollection of elements with a specific tag name. It's a live collection, 
// meaning changes to the DOM are reflected in the collection.
// querySelectorAll: Returns a static NodeList of elements matching a specified CSS selector. It's not a live collection.
// we can iterate, and manipulate html by both of these


// 8. Selecting Elements with Multiple Classes
// const elementWithMultipleClasses = document.querySelector('.class1.class2');

// 9. Selecting the First Child Element
// const firstChild = document.querySelector('parent-element > :first-child');


// 10. Advantages of querySelector/querySelectorAll:
// Flexibility: Can select elements based on various CSS selectors, providing more precise targeting.
// Efficiency: Can be more efficient in certain scenarios, especially when dealing with complex selectors.
// Modern Approach: Aligns with modern web development practices and CSS selectors.
// Live vs. Static: querySelectorAll returns a static NodeList, which can be useful in some cases, 
// while getElementsByTagName returns a live HTMLCollection.


// Bonus Practice Exercise
// ========================
// Write a JavaScript function that does the following:

// Selects an element with the ID title.
// Selects all elements with the class description.
// Selects the first <button> element in the document.
// Changes their styles to have a red background.
