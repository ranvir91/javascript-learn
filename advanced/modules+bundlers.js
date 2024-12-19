// =============================
// 1. ES Modules (import/export)
// =============================

// Definition:
// ES Modules (ECMAScript Modules) are the modern standard for modular JavaScript. 
// They allow splitting code into multiple files and importing/exporting functions, 
// objects, or variables between files.

// Key Features:

// Use import and export keywords.
// Supports static analysis for bundlers and tools.
// Works natively in modern browsers and Node.js.

// Example of ES Modules
// File: math.js (Exporting the module)

// // Named exports
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// // Default export
// const multiply = (a, b) => a * b;
// export default multiply;
// File: app.js (Importing the module)

// import multiply, { add, subtract } from './math.mjs';

// console.log(add(2, 3));       // Output: 5
// console.log(subtract(5, 2));  // Output: 3
// console.log(multiply(2, 3));  // Output: 6

// Explanation:
// Use export for named exports (add and subtract) and export default for a single default export (multiply).
// Use import to bring in both named and default exports.
// Dynamic Imports (ES Modules)

// Dynamic imports allow you to import a module asynchronously when needed.

// Dynamically import a module
// import('./math.mjs').then((module) => {
//   console.log(module.add(3, 4)); // Output: 7
// });


// ==================
// 2. CommonJS
// ==================

// Definition:
// CommonJS is a module system used in Node.js before ES Modules were introduced. It uses require to import modules and module.exports to export them.

// Key Features:

// Synchronous execution (works in Node.js only).
// Uses require to load modules and module.exports to export.
// Works well with older JavaScript environments.

// Example of CommonJS

// // File: math.js (Exporting the module)
// // Exporting multiple values
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// module.exports = { add, subtract };
// File: app.js (Importing the module)

// const math = require('./math');

// console.log(math.add(2, 3));       // Output: 5
// console.log(math.subtract(5, 2));  // Output: 3
// Default Export in CommonJS

// You can directly export a single value using module.exports.

// // math.js
// module.exports = function multiply(a, b) {
//   return a * b;
// };

// // app.js
// const multiply = require('./math');
// console.log(multiply(2, 3)); // Output: 6
// Key Differences Between ES Modules and CommonJS

// Feature	ES Modules	CommonJS
// Syntax	import/export	require/module.exports
// Execution	Asynchronous	Synchronous
// Default Exports	export default	module.exports
// File Extension	.js (also .mjs for Node)	.js
// Environment	Works in browsers and Node.js	Works in Node.js only



// =================================
// 3. Tools: Webpack, Parcel, Vite
// =================================

// These tools are bundlers and build tools that help developers manage modern JavaScript projects efficiently.

// ============
// Webpack
// ============

// Definition:
// Webpack is a module bundler that bundles JavaScript files, CSS, images, and other assets
//  into optimized output for the browser.

// Key Features:

// Entry point and output configuration.
// Loaders: Process CSS, images, and other file types.
// Plugins: Perform tasks like minification and optimization.

// Example of Webpack Configuration

// File: webpack.config.js

// const path = require('path');

// module.exports = {
//   entry: './src/index.js', // Entry point
//   output: {
//     filename: 'bundle.js', // Output file
//     path: path.resolve(__dirname, 'dist'),
//   },
//   mode: 'development', // Set to 'production' for optimized builds
// };

// Usage:
// Run npx webpack to bundle your files.


// =============
// Parcel
// =============

// Definition:
// Parcel is a zero-configuration bundler that works out of the box with no setup required.

// Key Features:

// No configuration needed.
// Faster builds using multi-core processing.
// Supports JavaScript, CSS, HTML, and assets.

// How to Use Parcel

// Install Parcel:

// npm install -g parcel-bundler

// Organize your project:

// File structure:

// project/
//   ├── index.html
//   ├── src/
//   │   └── index.js

// Run Parcel:

// parcel index.html



// ==========
// Vite
// ==========

// Definition:
// Vite is a modern frontend tool that focuses on speed by leveraging ES Modules for 
// development and Rollup for production builds.

// Key Features:

// Super-fast development server.
// Native ES Module support.
// Optimized for modern browsers.
// How to Use Vite

// Install Vite:

// npm create vite@latest my-project --template vanilla
// cd my-project
// npm install
// npm run dev

// Project Structure:

// my-project/
//   ├── index.html
//   ├── main.js
//   ├── style.css

// Start the development server:

// npm run dev

// Summary
// ES Modules (import/export):

// Use import and export for modular JavaScript.
// Supported natively in modern browsers and Node.js.

// CommonJS:

// Uses require and module.exports.
// Works in Node.js environments.

// Tools:

// Webpack: Highly configurable, suitable for complex projects.
// Parcel: Zero-config, simple and fast bundler.
// Vite: Modern, fast, and optimized for ES Modules.

