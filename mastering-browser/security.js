// 1. XSS (Cross-Site Scripting) and CSRF
// =========================================

// XSS (Cross-Site Scripting)
// ==========================
// XSS (Cross-Site Scripting) is a vulnerability where an attacker injects malicious 
// scripts into a trusted website. This malicious script is executed on the user's 
// browser and can steal sensitive information, such as cookies, tokens, or user input.

// Types of XSS

// 1. Stored XSS (Persistent XSS):

// Malicious script is stored on the server (e.g., in a database).
// It runs when the victim loads the affected page.

// 2. Reflected XSS:

// The malicious script is part of a request (e.g., a URL parameter).
// It runs when the server reflects the input without sanitization.

// 3. DOM-Based XSS:

// The malicious script is executed on the client side by manipulating the DOM 
// (Document Object Model).

// Example of XSS Vulnerability
// Vulnerable Code:

// <!DOCTYPE html>
// <html>
// <head>
//     <title>XSS Example</title>
// </head>
// <body>
//     <h2>Search</h2>
//     <p>Result for: <span id="result"></span></p>

//     <script>
//         // Assume the search term comes from the URL
//         const params = new URLSearchParams(window.location.search);
//         const searchTerm = params.get('query');

//         // Vulnerable to XSS because it directly injects user input into the DOM
//         document.getElementById('result').innerHTML = searchTerm;
//     </script>
// </body>
// </html>
// Attack:

// A malicious user could craft a URL like:
// http://example.com/?query=<script>alert('XSS')</script>
// When a victim clicks the link, the JavaScript alert runs.

// How to Prevent XSS
// 1. Escape User Input: Always escape user input before rendering it to the DOM.

// const searchTerm = params.get('query');
// document.getElementById('result').textContent = searchTerm; // Safe

// 2. Content Security Policy (CSP): Define policies to block inline scripts.

// 3. Use Libraries Like DOMPurify: DOMPurify sanitizes user input to prevent XSS.

// <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js"></script>
// <script>
//     const clean = DOMPurify.sanitize(searchTerm);
//     document.getElementById('result').innerHTML = clean;
// </script>


// CSRF (Cross-Site Request Forgery)
// ==================================
// CSRF is a vulnerability where an attacker tricks a user into performing unwanted 
// actions on a trusted site where they are authenticated.

// Example of CSRF Attack
// Imagine a user is logged into their banking app. If the app doesn't verify the request origin, an attacker can send the user a malicious link to transfer funds.

// Malicious Link:

// <img src="http://bank.com/transfer?to=attacker&amount=1000" />
// When the user loads this link (e.g., through an email or a malicious site), the browser sends the request with the user's session cookies, transferring money without their consent.

// How to Prevent CSRF

// 1. CSRF Tokens: Include a unique token with each form submission and validate it on 
// the server.

// Example:
// <form method="POST" action="/transfer">
//     <input type="hidden" name="csrf_token" value="unique_csrf_token">
//     <button type="submit">Transfer</button>
// </form>

// 2. SameSite Cookies: Set cookies to SameSite=strict to prevent them from being sent with cross-origin requests.

// Example:

// Set-Cookie: sessionid=abc123; HttpOnly; SameSite=Strict

// 3. Verify Referer Headers: Check the Referer header to ensure the request originates from your domain.


// ===================================
// 2. Content Security Policy (CSP)
// ===================================
// Content Security Policy (CSP) is a security feature that helps prevent XSS and other code 
// injection attacks by specifying which resources are allowed to be loaded and executed.

// How CSP Works
// A CSP header is sent by the server to enforce rules about:

// Which scripts, styles, and resources are allowed to load.
// Blocking inline scripts.
// Restricting external domains.
// Example of CSP Header
// The server sends the following HTTP header:

// Content-Security-Policy: script-src 'self' https://apis.example.com

// What it does:

// Allows scripts to be loaded only from the same domain ('self') and https://apis.example.com.
// Blocks inline scripts and other external domains.


// Implementing CSP in HTML
// Inline CSP via <meta> tag:

// <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.example.com;">

// Example: CSP Blocking Inline Scripts
// <!DOCTYPE html>
// <html>
// <head>
//     <meta http-equiv="Content-Security-Policy" content="script-src 'self'">
//     <title>CSP Example</title>
// </head>
// <body>
//     <h2>Content Security Policy Example</h2>

//     <script>
//         console.log("This script runs because it follows CSP rules.");
//     </script>

//     <script>
//         alert("This script will run if allowed.");
//     </script>

//     <script src="https://evil.com/malicious.js"></script> <!-- This will be blocked -->
// </body>
// </html>

// Behavior:

// Only scripts from 'self' (same domain) are allowed.
// External scripts (e.g., https://evil.com/malicious.js) are blocked.

// Summary
// XSS: Allows attackers to inject malicious scripts. Prevent it using input sanitization, CSP, and libraries like DOMPurify.
// CSRF: Tricks users into performing unintended actions. Prevent it using CSRF tokens, SameSite cookies, and origin checks.
// Content Security Policy (CSP): Helps mitigate XSS by defining trusted sources for scripts, styles, and other resources. It blocks inline scripts and untrusted external sources