// Callback hell :
// Callback hell, also known as the "pyramid of doom," is a situation in JavaScript where multiple nested callbacks make the code
// deeply indented, difficult to read, and hard to maintain. It typically occurs when dealing with asynchronous operations,
// such as network requests, file I/O, or timers.

// Why Callbacks Lead to Nesting:
// In traditional asynchronous JavaScript, you often use callbacks to handle the results of asynchronous operations.
// When one asynchronous operation depends on the result of another, you end up nesting callbacks within callbacks,
// creating the "pyramid" structure.

// Example of Callback Hell:

// doSomething(function(result1) {
//   doSomethingElse(result1, function(result2) {
//     doThirdThing(result2, function(result3) {
//       doFourthThing(result3, function(result4) {
//         // ... more nested callbacks
//         console.log("Final result:", result4);
//       });
//     });
//   });
// });


// Problems with Callback Hell:

// Readability: Deep nesting makes the code very difficult to read and understand. It's hard to follow the flow of execution
// and see the relationships between different asynchronous operations.
// Maintainability: Modifying or debugging deeply nested code becomes a nightmare. Adding new asynchronous operations or
// changing the logic requires careful adjustments to the nesting structure.
// Error Handling: Error handling becomes complex. You need to handle errors at each level of nesting, leading to repetitive
// and error-prone code.
// Inversion of Control: The control flow is inverted. Instead of writing code that executes sequentially, you're relying
// on callbacks to be executed at some point in the future. This can make it harder to reason about the code's behavior.

// Solutions to Avoid Callback Hell:

// Named Functions: Instead of using anonymous callback functions, define named functions. This improves readability and
// makes debugging easier.

// const cart = ['pants', 'shirts', 'tshirts'];

// function createOrder(cart, proceedToPayment) {
//     console.log(`Order created using these items : ${cart.join(",")}`);
//     const orderId = '123'; // Declare orderId within this scope
//     proceedToPayment(orderId, showOrderSummery); // Pass showOrderSummery as a callback
// }
// function proceedToPayment(orderId, showOrderSummery) {
//     console.log(`Payment successful for orderId : ${orderId}`);
//     const paymentInfo = { orderId, paymentAmt: 1000 };
//     showOrderSummery(paymentInfo, updateWalletPoints); // Pass paymentInfo and updateWalletPoints
// }

// function showOrderSummery(paymentInfo, updateWalletPoints) {
//     console.log("Order Summary:", paymentInfo);
//     const orderSummary = { paymentInfo, walletPoint: 100 };
//     updateWalletPoints(orderSummary); // Call updateWalletPoints with orderSummary
// }

// function updateWalletPoints(orderSummary) {
//     console.log(`Wallet updated with points: ${orderSummary.walletPoint} for order ${orderSummary.paymentInfo.orderId}`);
// }

// createOrder(cart, proceedToPayment);


// Promises: Promises provide a cleaner way to handle asynchronous operations. They allow you to chain asynchronous operations
// using .then() and handle errors using .catch().

const cart = ['pants', 'shirts', 'tshirts'];

function createOrder(cart) {
    return new Promise((resolve, reject) => {
        console.log(`Order created using ${cart.join(",")}`);
        const orderId = '123';
        resolve(orderId); // orderId is used as input in proceedToPayment() fn
    });
}
function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`Payment successful for orderId : ${orderId}`);
        const paymentInfo = { orderId, paymentAmt: 1000 };
        resolve(paymentInfo);
    });
}
function showOrderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        console.log("Order Summary:", paymentInfo);
        const orderSummary = { paymentInfo, walletPoint: 100 };
        resolve(orderSummary);
    });
}
function updateWalletPoints(orderSummary) {
    return new Promise((resolve, reject) => {
        console.log(`Wallet updated with points: ${orderSummary.walletPoint} for order ${orderSummary.paymentInfo.orderId}`);
        resolve(); // Resolve when wallet update is done
        reject('Unable to update wallet');
    });
}

// Chaining with .then()
// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(orderSummary => updateWalletPoints(orderSummary))
//     .then(() => console.log("Order processing complete")) // Final message
//     .catch(err => console.error("Error processing order:", err)); // Error handling


// Async/Await: 
// ===============
// async/await is built on top of Promises and makes asynchronous code look and behave a bit more like synchronous code,
// making it even more readable and easier to maintain.

async function handleOrder(){
    try{
        const orderId = await createOrder(cart)
        const paymentInfo = await proceedToPayment(orderId)
        const orderSummary = await showOrderSummary(paymentInfo)
        await updateWalletPoints(orderSummary)
        console.log("Order processing complete")
    }catch(err){
        console.log("Error processing order", err)
    }
}
handleOrder();

// Explanation of Changes (Promises):

// Promises Returned: Each function (createOrder, proceedToPayment, showOrderSummary, updateWalletPoints) now returns a Promise.
// resolve(): Inside each Promise, the resolve() function is called with the result of the asynchronous operation 
// (the orderId, paymentInfo, or orderSummary).
// .then() Chaining: The .then() method is used to chain the Promises together. The result of one Promise is passed as 
// an argument to the next .then() callback.
// .catch() Error Handling: The .catch() method handles any errors that occur during the Promise chain. If any Promise rejects,
// the error is caught and logged.

// Async Await Example: The handleOrder function uses async and await to make the asynchronous code easier to read and 
// reason about. The try...catch block handles any errors that might occur during the process.


// Recommendation:
// ================

// Using Promises with async/await is the recommended approach for handling asynchronous operations in modern JavaScript.
// It provides the best balance of readability, maintainability, and error handling. Avoid deeply nested callbacks 
// whenever possible to keep your code clean and manageable.