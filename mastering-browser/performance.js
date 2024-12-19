// ============================
// 1. Debouncing and Throttling
// ============================

// Debouncing and throttling are techniques to optimize event handling and improve 
// performance in JavaScript, especially for events that fire frequently 
// (e.g., scrolling, resizing, typing).

// Debouncing
// ================
// Debouncing ensures that a function is executed only after a specific delay since the 
// last time the event was triggered. If the event is triggered again during the delay, 
// the timer resets.

// Use case: Input fields, search bars, or window resize events.

// Example:

// <input type="text" id="search" placeholder="Start typing..." />

// <script>
// let debounceTimer;

// // Debounce function
// function debounce(callback, delay) {
//     return function () {
//         clearTimeout(debounceTimer); // Clear the previous timer
//         debounceTimer = setTimeout(() => {
//             callback.apply(this, arguments);
//         }, delay);
//     };
// }

// const searchInput = document.getElementById("search");
// searchInput.addEventListener(
//     "input",
//     debounce(function (event) {
//         console.log("Searching for:", event.target.value);
//     }, 500)
// );
// </script>

// How it works:

// As the user types, the input event keeps firing.
// The debounce function ensures that the callback only runs 500ms after the user stops typing.


// Throttling
// =================
// Throttling ensures that a function runs at regular intervals regardless of how many 
// times the event fires. It limits the execution rate of the function.

// Use case: Scroll events, mouse movements.

// Example:

// <div style="height: 2000px;">
//     Scroll down to see throttling in action
// </div>

// <script>
// // Throttle function
// function throttle(callback, delay) {
//     let shouldWait = false;
//     return function () {
//         if (!shouldWait) {
//             callback.apply(this, arguments);
//             shouldWait = true;
//             setTimeout(() => {
//                 shouldWait = false;
//             }, delay);
//         }
//     };
// }

// window.addEventListener(
//     "scroll",
//     throttle(function () {
//         console.log("Scrolled at:", new Date().toLocaleTimeString());
//     }, 1000)
// );
// </script>

// How it works:
// Even though the scroll event fires continuously, the function executes at a maximum 
// rate of once every second.


// 2. Lazy Loading
// =====================

// Lazy loading is a performance optimization technique where resources 
// (e.g., images, components, or scripts) are loaded only when needed, rather than all at once.

// Lazy Loading Images
// Example:

// <img
//     data-src="https://via.placeholder.com/600x400"
//     class="lazy"
//     width="600"
//     height="400"
//     alt="Lazy Loaded Image"
// />

// <script>
// document.addEventListener("DOMContentLoaded", function () {
//     const lazyImages = document.querySelectorAll("img.lazy");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src; // Load the image
//                 img.classList.remove("lazy");
//                 observer.unobserve(img); // Stop observing
//             }
//         });
//     });

//     lazyImages.forEach((img) => observer.observe(img));
// });
// </script>

// How it works:

// Images are initially loaded with a placeholder or data-src.
// When the image enters the viewport, the IntersectionObserver triggers and replaces 
// data-src with the actual src attribute, loading the image.
// Benefit: Reduces initial page load time by loading images only when visible.


// =========================
// 3. Rendering Optimization
// ===========================

// Rendering optimization refers to techniques that improve the speed and efficiency of 
// DOM updates to enhance user experience.

// Minimizing DOM Manipulations
// Frequent DOM updates are expensive. Instead of manipulating the DOM repeatedly, 
// combine changes and update it once.

// Example:

// <div id="list"></div>

// <script>
// const list = document.getElementById("list");
// const fragment = document.createDocumentFragment(); // Temporary storage

// for (let i = 1; i <= 1000; i++) {
//     const item = document.createElement("div");
//     item.textContent = `Item ${i}`;
//     fragment.appendChild(item);
// }

// // Append the fragment to the DOM at once
// list.appendChild(fragment);
// </script>


// Why it works:

// Instead of appending items to the DOM 1000 times, a DocumentFragment is used.
// The DOM updates only once, improving performance.


// Virtual DOM (React Concept)
// ==============================

// In libraries like React, a "virtual DOM" is maintained, which reduces direct DOM manipulation:

// Changes are applied to the virtual DOM first.
// Only the differences are updated in the real DOM.

// RequestAnimationFrame
// =====================

// requestAnimationFrame synchronizes animations with the browser's refresh rate for 
// smoother performance.

// Example:

// <div id="box" style="width: 50px; height: 50px; background: red; position: absolute;"></div>

// <script>
// const box = document.getElementById("box");
// let position = 0;

// function moveBox() {
//     position += 2;
//     box.style.left = position + "px";

//     if (position < 500) {
//         requestAnimationFrame(moveBox); // Call next frame
//     }
// }

// requestAnimationFrame(moveBox);
// </script>

// How it works:

// requestAnimationFrame updates the position of the box smoothly in sync with the display refresh rate.


// Debouncing Repaints
// ===================
// Combine multiple DOM updates into fewer repaints.

// Example:

// let resizeTimer;
// window.addEventListener("resize", () => {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         console.log("Resized:", window.innerWidth, window.innerHeight);
//     }, 250);
// });
// Instead of recalculating on every resize event, it waits for the resizing to settle.

// Summary
// Debouncing: Delays function execution until events stop firing for a specific time.
// Throttling: Limits function execution to regular intervals.
// Lazy Loading: Loads resources like images or components only when they are needed (e.g., when visible).
// Rendering Optimization: Improves rendering performance by reducing unnecessary DOM updates, using virtual DOM, or synchronizing with requestAnimationFrame.

