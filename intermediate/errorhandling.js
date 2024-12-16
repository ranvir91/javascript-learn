// 1. try...catch and finally in JavaScript
// The try...catch statement allows you to handle errors gracefully in JavaScript. It is used to "try" a block of code, "catch" errors if they occur, and optionally execute a "finally" block that will always run, regardless of whether an error occurred.

// Syntax:
// javascript
// Copy code
// try {
//   // Code that may throw an error
// } catch (error) {
//   // Code to handle the error
// } finally {
//   // Code that always executes (optional)
// }
// Example 1: Using try...catch
// javascript
// Copy code
// try {
//   const result = 10 / 0; // No error here, but let's intentionally throw one
//   if (!isFinite(result)) {
//     throw new Error("Cannot divide by zero!");
//   }
//   console.log(result);
// } catch (error) {
//   console.error("Error caught: ", error.message); // Outputs: "Cannot divide by zero!"
// }
// Example 2: Using try...catch with finally
// javascript
// Copy code
// try {
//   let data = JSON.parse('{ "name": "John" }'); // Valid JSON string
//   console.log("Parsed Data:", data); // Runs successfully
// } catch (error) {
//   console.error("An error occurred:", error.message);
// } finally {
//   console.log("This block always runs, regardless of error."); 
// }
// // Output:
// // Parsed Data: { name: 'John' }
// // This block always runs, regardless of error.
// Example 3: Catching Syntax Errors in JSON
// javascript
// Copy code
// try {
//   let data = JSON.parse('Invalid JSON'); // This will throw a SyntaxError
//   console.log(data);
// } catch (error) {
//   console.error("Error caught: ", error.message); // Outputs: Error caught: Unexpected token I in JSON at position 0
// } finally {
//   console.log("Cleaning up resources...");
// }
// Key Points:
// The try block contains code that might throw an error.
// The catch block catches the error and lets you handle it.
// The finally block always runs, regardless of whether there was an error or not (e.g., to clean up resources or close files).
// 2. Custom Error Objects in JavaScript
// You can create custom error objects to represent domain-specific or application-specific errors. Custom errors help make your error-handling code clearer and more meaningful.

// How to Create a Custom Error:
// Create a new class that extends the built-in Error class.
// Add custom properties or methods if necessary.
// Example 1: Simple Custom Error
// javascript
// Copy code
// class CustomError extends Error {
//   constructor(message) {
//     super(message); // Call the parent class constructor
//     this.name = "CustomError"; // Set the error name
//   }
// }

// try {
//   throw new CustomError("This is a custom error!");
// } catch (error) {
//   console.error(`${error.name}: ${error.message}`); // Outputs: CustomError: This is a custom error!
// }
// Example 2: Custom Error with Additional Information
// javascript
// Copy code
// class ValidationError extends Error {
//   constructor(field, message) {
//     super(message); // Call the parent class constructor
//     this.name = "ValidationError";
//     this.field = field; // Custom property
//   }
// }

// try {
//   const username = "";
//   if (username === "") {
//     throw new ValidationError("username", "Username cannot be empty");
//   }
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.error(`Validation Error on field "${error.field}": ${error.message}`);
//     // Output: Validation Error on field "username": Username cannot be empty
//   } else {
//     console.error(error);
//   }
// }
// Example 3: Re-throwing Errors
// You can use throw inside a catch block to propagate errors after handling them.

// javascript
// Copy code
// class DatabaseError extends Error {
//   constructor(message, query) {
//     super(message);
//     this.name = "DatabaseError";
//     this.query = query;
//   }
// }

// try {
//   try {
//     throw new DatabaseError("Failed to execute query", "SELECT * FROM users");
//   } catch (error) {
//     console.error(`${error.name}: ${error.message}`); // Outputs: DatabaseError: Failed to execute query
//     throw error; // Re-throw the error to propagate it
//   }
// } catch (error) {
//   console.error("Error caught again:", error);
//   // Output: Error caught again: DatabaseError: Failed to execute query
// }
// Example 4: Logging Custom Errors with finally
// javascript
// Copy code
// class FileNotFoundError extends Error {
//   constructor(message, fileName) {
//     super(message);
//     this.name = "FileNotFoundError";
//     this.fileName = fileName;
//   }
// }

// try {
//   throw new FileNotFoundError("File not found", "data.txt");
// } catch (error) {
//   console.error(`${error.name}: ${error.message} (File: ${error.fileName})`);
// } finally {
//   console.log("Finished error handling."); 
// }
// // Output:
// // FileNotFoundError: File not found (File: data.txt)
// // Finished error handling.
// Key Points for Custom Errors:
// Extend the Error class for your custom errors.
// Add any additional properties (e.g., field, query, etc.) that give more context about the error.
// Use instanceof to check the error type when handling it.
// Custom errors make debugging and error logging more meaningful in large applications.