// Function Declarations and Expressions
// ====================================

// Difference:
// ===========
// Function Declaration: Declared with the function keyword, hoisted to the top of the scope.
// Function Expression: Assigned to a variable, not hoisted.

// Hoisting:
// ============
// Function declarations are hoisted, meaning they can be used before they are declared.
// Function expressions are not hoisted, so they must be declared before use.

// Arbitrary Arguments:
// ======================
// Use the arguments object within a function to access all arguments passed to it.

// Named vs. Anonymous:
// ======================
// Named: Has a name and can be called recursively.
// Anonymous: Doesn't have a name and can't be called recursively.

// When to Use Which:
// ====================
// Function Declaration: When you need to use a function before it's defined or when you want to expose it globally.
// Function Expression: When you need to create a function dynamically or pass it as an argument to another function.

// Arrow Functions
// =================

// Syntax: (parameters) => expression or (parameters) => { statements }
// Differences:
    // Concise syntax
    // Implicit return for single-line expressions
    // Different this binding
// When to Use:
    // Short, concise functions
    // Event handlers
    // Callback functions
    // Avoid them when this binding is crucial or complex logic is involved.
// Implicit Return:
    // If the arrow function body is a single expression, it's implicitly returned.
// this Binding:
// Arrow functions inherit the this value from the enclosing scope.


// Default Parameters
// ==================
// Definition: function myFunction(param1 = defaultValue)
// Fewer Arguments: Default values are used for missing arguments.
// Multiple Defaults: function myFunction(param1 = 'default1', param2 = 'default2')
// Optional Arguments: Use default values to make arguments optional.
// Advantages: Improved code readability, reduced complexity, and flexible function calls.


// IIFEs (Immediately Invoked Function Expressions)
// ================================================
// Creation and Scope: (function() { ... })(); creates an immediately executed function, creating a private scope.
// Passing Arguments: Pass arguments within the parentheses: (function(arg1, arg2) { ... })(value1, value2);
// Module Pattern: Used to create modules with private variables and public methods.
// Difference: IIFEs are executed immediately, while regular function expressions are not.
// Use Cases: Creating private scopes, modularizing code, and avoiding global namespace pollution.







