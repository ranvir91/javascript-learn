// ========================================
// 1. localStorage, sessionStorage, cookies
// ========================================

// These are client-side storage mechanisms in JavaScript that allow data persistence in the browser.

// localStorage
// Data stored persists infinitely even after the browser is closed.
// It can only store string data.

// Example:
// // Save data to localStorage
// localStorage.setItem("username", "Ranvir");

// // Retrieve data
// const username = localStorage.getItem("username");
// console.log(username); // Output: Ranvir

// // Remove data
// localStorage.removeItem("username");

// // Clear all data
// localStorage.clear();


// sessionStorage
// ===================
// Data persists only for the duration of the page session (until the tab is closed).
// Similar to localStorage but temporary.

// Example:

// // Save data to sessionStorage
// sessionStorage.setItem("sessionID", "abc123");

// // Retrieve data
// const sessionID = sessionStorage.getItem("sessionID");
// console.log(sessionID); // Output: abc123

// // Remove data
// sessionStorage.removeItem("sessionID");

// // Clear all data
// sessionStorage.clear();


// Cookies
// ================
// Used for small data storage (up to ~4KB) with an expiration date.
// Data can be sent to the server with HTTP requests.

// Example:

// // Set a cookie
// document.cookie = "username=Ranvir; expires=Fri, 31 Dec 2024 12:00:00 UTC; path=/";

// // Retrieve cookies
// console.log(document.cookie); // Output: username=Ranvir

// // Update a cookie
// document.cookie = "username=RV; expires=Fri, 31 Dec 2024 12:00:00 UTC; path=/";

// // Delete a cookie
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// Comparison
// Feature	        | localStorage      |	sessionStorage      |	Cookies
// =====================================================
// Lifetime         | Indefinite	    | Until tab is closed   | Depends on expiry
// Data Size	    | 5-10MB	        | 5-10MB	            | ~4KB
// Accessible By	| JavaScript        | JavaScript            | Server & Client
// Use Case	        | Persistent data	| Temporary data	    | Authentication




// 2. Geolocation API
// ======================

// The Geolocation API allows you to retrieve the location of a user's device.

// Example:

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             console.log("Latitude:", position.coords.latitude);
//             console.log("Longitude:", position.coords.longitude);
//         },
//         (error) => {
//             console.error("Error occurred:", error.message);
//         }
//     );
// } else {
//     console.log("Geolocation is not supported by this browser.");
// }

// Explanation:
// navigator.geolocation.getCurrentPosition fetches the user's latitude and longitude.
// A success callback provides the location.
// An error callback handles cases where the location is denied or unavailable.


// 3. Fetch API (AJAX)
// =====================

// The Fetch API allows making asynchronous HTTP requests (e.g., GET, POST).

// GET Example:

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json()) // Parse JSON response
//     .then((data) => console.log("Data:", data))
//     .catch((error) => console.error("Error:", error));

// POST Example:
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
// })
//     .then((response) => response.json())
//     .then((data) => console.log("Created:", data))
//     .catch((error) => console.error("Error:", error));


// Key Points:

// Fetch returns a Promise.
// Use .json() to parse a JSON response.
// method, headers, and body are specified for POST requests.



// 4. WebSockets
// =====================

// WebSockets enable real-time, two-way communication between a client and server.

// Example:

// // Open a WebSocket connection
// const socket = new WebSocket("wss://echo.websocket.org");

// // Event when the connection opens
// socket.addEventListener("open", () => {
//     console.log("Connected to WebSocket server");
//     socket.send("Hello, Server!"); // Send a message
// });

// // Event when a message is received
// socket.addEventListener("message", (event) => {
//     console.log("Message from server:", event.data);
// });

// // Event when the connection closes
// socket.addEventListener("close", () => {
//     console.log("WebSocket connection closed");
// });

// // Event when there's an error
// socket.addEventListener("error", (error) => {
//     console.error("WebSocket error:", error);
// });

// Explanation:

// new WebSocket(url) creates a WebSocket connection.
// socket.send() sends data to the server.
// Events like open, message, close, and error help manage communication.


// Comparison of Fetch and WebSockets

// Feature	                | Fetch API                     | WebSockets
// =============================================    =====================
// Communication Type	    | One-way (Request -> Response) | Two-way (Client <-> Server)
// Data Flow	            | Polling or on-demand	        | Real-time communication
// Use Cases	            | Fetching static data,REST APIs|	Chat apps, live updates

// Summary
// localStorage, sessionStorage, cookies store data client-side with different 
// lifetimes and use cases.
// Geolocation API retrieves the user's location.
// Fetch API allows AJAX-style requests for communicating with servers.
// WebSockets enable full-duplex real-time communication.