// 1. Event Bubbling, Capturing, and Delegation
// Event propagation in JavaScript happens in two phases:

// Event Capturing (trickling phase) - Event flows top-to-bottom (from the root to the target).
// Event Bubbling - Event flows bottom-to-top (from the target to the root).
// Event Bubbling
// In the bubbling phase, an event triggered on a child element propagates up to its ancestors.

// Example:

// html
// Copy code
// <div id="parent" style="border: 2px solid red; padding: 20px;">
//     Parent
//     <button id="child">Click Me</button>
// </div>

// <script>
// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent clicked (Bubbling)");
// });

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Child clicked");
// });
// </script>
// Output when clicking the button:

// "Child clicked" (event on #child runs first).
// "Parent clicked (Bubbling)" (bubbles up to the #parent).
// By default, event listeners use bubbling (false as the third argument in addEventListener).

// Event Capturing
// In capturing, the event travels from the root to the target element.

// Example (using true):

// html
// Copy code
// <div id="parent" style="border: 2px solid red; padding: 20px;">
//     Parent
//     <button id="child">Click Me</button>
// </div>

// <script>
// document.getElementById("parent").addEventListener(
//     "click",
//     () => {
//         console.log("Parent clicked (Capturing)");
//     },
//     true // Capture phase
// );

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Child clicked");
// });
// </script>
// Output when clicking the button:

// "Parent clicked (Capturing)" (capturing phase triggers first).
// "Child clicked".
// Note: Adding true as the third parameter ensures capturing.

// Event Delegation
// Event delegation allows us to use a single event listener on a parent element to handle events for multiple child elements. It works because of event bubbling.

// Example:

// html
// Copy code
// <ul id="list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>

// <script>
// document.getElementById("list").addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         console.log("You clicked:", event.target.textContent);
//     }
// });
// </script>
// How it works:

// The click event on the <ul> propagates up from the <li> elements.
// The parent (#list) checks which child (<li>) triggered the event using event.target.
// Benefits of Event Delegation:

// Reduces the number of event listeners.
// Useful when dynamically adding child elements.
// 2. Custom Events
// Custom events in JavaScript allow developers to create and dispatch their own events. This is useful for inter-component communication or custom workflows.

// Creating and Dispatching Custom Events
// Example:

// html
// Copy code
// <button id="myButton">Click to Trigger Custom Event</button>

// <script>
// // Create a custom event
// const myEvent = new CustomEvent("myCustomEvent", {
//     detail: { message: "This is a custom event!", time: new Date() },
// });

// // Add a listener for the custom event
// document.addEventListener("myCustomEvent", (event) => {
//     console.log("Custom Event Triggered:");
//     console.log("Message:", event.detail.message);
//     console.log("Time:", event.detail.time);
// });

// // Dispatch the custom event when the button is clicked
// document.getElementById("myButton").addEventListener("click", () => {
//     document.dispatchEvent(myEvent);
// });
// </script>
// Output: When the button is clicked:

// vbnet
// Copy code
// Custom Event Triggered:
// Message: This is a custom event!
// Time: (Current Date and Time)
// Custom Events with DOM Elements
// Custom events can also be triggered on specific elements instead of the entire document.

// Example:

// html
// Copy code
// <div id="box">Click me</div>

// <script>
// const box = document.getElementById("box");

// // Define a custom event
// const boxClickedEvent = new CustomEvent("boxClicked", {
//     detail: { clicked: true, time: new Date() },
// });

// // Listen for the custom event
// box.addEventListener("boxClicked", (event) => {
//     console.log("Box was clicked!");
//     console.log("Event Details:", event.detail);
// });

// // Trigger the custom event on click
// box.addEventListener("click", () => {
//     box.dispatchEvent(boxClickedEvent);
// });
// </script>
// Output: When the box is clicked:

// sql
// Copy code
// Box was clicked!
// Event Details: { clicked: true, time: (Current Date and Time) }
// Summary
// Event Bubbling: Events propagate upwards from the target to ancestors.
// Event Capturing: Events propagate downwards from ancestors to the target.
// Event Delegation: Use a single event listener on a parent to manage events for child elements.
// Custom Events: Use CustomEvent to define and dispatch custom events with additional data (detail).
// These concepts are essential for building efficient and modular JavaScript applications