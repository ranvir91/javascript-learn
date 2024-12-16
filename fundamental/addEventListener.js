// 1. What is addEventListener, and why is it preferred over using onclick, onmouseover, etc., for adding event listeners?
// ans -
// addEventListener is a method used to add event listeners to an element. 
// It's preferred over inline event handlers because it separates the HTML structure from the 
// JavaScript behavior, making the code more modular, maintainable, and testable.


// 2. Write a JavaScript code snippet to add a click event listener to a button with the ID myButton.
// Adding a click event listener to a button:
// const button = document.getElementById('myButton');
// button.addEventListener('click', () => {
//     console.log('Button clicked!');
// });


// 3. How can you remove an event listener that was added using addEventListener? Provide an example.
// Removing an event listener:
// button.removeEventListener('click', handleClick);


// 4. Can you attach multiple event listeners of the same type (e.g., click) to the same element using addEventListener? Explain with an example.
// Multiple event listeners:
// button.addEventListener('click', () => {
//     console.log('First click handler');
// });
// button.addEventListener('click', () => {
//     console.log('Second click handler');
// });
// Both handlers will be executed when the button is clicked.


// 5. What is the difference between addEventListener and inline event handlers 
// (e.g., <button onclick="handleClick()">)?
// ans -
// addEventListener vs. inline event handlers:
// addEventListener: More flexible, allows multiple event listeners, and separates JavaScript from HTML.
// Inline Event Handlers: Less flexible, can only have one event handler per element, and mixes JavaScript with HTML.


// 6. What are the three parameters of addEventListener? Explain each of them briefly.
// ans - addEventListener parameters:
// event type: The type of event to listen for (e.g., 'click', 'mouseover', 'keydown').
// event listener function: The function to be executed when the event occurs.
// options (optional): An object containing options, such as capture (boolean) and once (boolean).
// once option: The once option, when set to true, causes the event listener to be removed after the first time it's triggered.


// 7. What does the once option in the third parameter of addEventListener do? Provide an example where this is useful.
// this will remove the event listener after once triggered
// button.addEventListener('click', () => {
//     console.log('Button clicked once');
// }, { once: true });


// 8. Write a program where you attach a mouseover event listener to a <div> element and log the mouse coordinates to the console.
// ans Logging mouse coordinates:
// const divElement = document.getElementById('myDiv');
// divElement.addEventListener('mouseover', (event) => {
//     console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
// });


// 9. How can you pass additional arguments to the event handler function when using addEventListener?
// ans Passing arguments to event handlers:

// function handleClick(event, arg1, arg2) {
//     console.log(event.target, arg1, arg2);
// }
// button.addEventListener('click', (event) => handleClick(event, 'arg1', 'arg2'));


// 10. Explain event delegation and demonstrate how it can be implemented using addEventListener 
// for a list of dynamically added items.
// ans Event Delegation:
// const parentElement = document.getElementById('parent');
// parentElement.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         console.log('Clicked on a list item:', event.target.textContent);
//     }
// });
// This code attaches a single event listener to the parent element. When a click event occurs on 
// any child list item, the event bubbles up to the parent, triggering the event listener.

// Event delegation is a technique in JavaScript where a single event listener is attached to a 
// parent element, rather than individual child elements. When an event occurs on a child element, 
// it bubbles up to the parent, triggering the event listener. This technique is particularly useful
//  for handling events on dynamically added elements.   

// Why Use Event Delegation?

// Efficiency: Instead of attaching event listeners to multiple elements, you only need one listener on the parent element.
// Dynamic Content: If you have dynamically added elements, you don't need to reattach event listeners to them.
// Cleaner Code: It can lead to cleaner and more maintainable code.
// Example:
// const parentElement = document.getElementById('parent');
// parentElement.addEventListener('click', (event) => {
//   if (event.target.tagName === 'LI') {
//     console.log('Clicked on a list item:', event.target.textContent);
//   }
// });

// Explanation:
// Single Event Listener: We attach a single click event listener to the parentElement.
// Event Bubbling: When a click event occurs on a child li element, it bubbles up to the parent.
// Event Target: The event.target property refers to the element that triggered the event.
// Conditional Check: We check if the clicked element is an li element. If so, we log its text content.

// Benefits of Event Delegation:
// Improved Performance: Fewer event listeners reduce overhead.
// Dynamic Content: Handles events on dynamically added elements without additional code.
// Code Maintainability: Centralized event handling makes code easier to manage and modify.


// Bonus Practical Challenge
// ==========================
// Write a script where:
// You attach a click event to a parent container (#ulid) that handles the clicks of its child buttons.
// The event handler should log the text content of the clicked button.

// let parentElement = document.getElementById('ulid');
// let buttonelem = document.getElementById('buttonid');
// buttonelem.addEventListener('click', ()=> {
//     let li = document.createElement("li");
//     li.innerText = `List ` + ( parseInt(parentElement.getElementsByTagName('li').length) + 1);
//     parentElement.appendChild(li);
// });
// parentElement.addEventListener('click', (event) => {
//     if(event.target.tagName === 'LI') {
//         console.log(event.target.innerText);
//     }
// });
