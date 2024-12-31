// Promise methods: Promise.all, Promise.allSettled, Promise.race, and Promise.any in JavaScript.

// Promise.all(iterable):
// This method takes an iterable of Promises (like an array) and returns a single Promise.
// This returned Promise:
// -- Resolves only when all of the input Promises resolve. The resolved value is an array containing the resolved values of
//      each input Promise, in the same order as the input Promises.
// -- Rejects immediately if any of the input Promises reject. The rejection reason is the reason of the first rejected Promise.


// Promise.allSettled(iterable):
// This method also takes an iterable of Promises and returns a single Promise.
// This returned Promise:
// -- Resolves only after all of the input Promises have settled (meaning they have either resolved or rejected).
//      The resolved value is an array of objects, where each object describes the outcome of an input Promise.
// -- Each object has a status property (either "fulfilled" or "rejected") and either a value property (if fulfilled) 
//      or a reason property (if rejected).


// Promise.race(iterable):
// This method takes an iterable of Promises and returns a single Promise.
// This returned Promise:
// -- Settles (resolves or rejects) as soon as the first of the input Promises settles.
// -- If the first settled Promise resolves, the returned Promise resolves with that value.
// -- If the first settled Promise rejects, the returned Promise rejects with that reason.


// Promise.any(iterable):
// This method also takes an iterable of Promises and returns a single Promise. (Resolve / Success seeking promise)
// This returned Promise:
// -- Resolves as soon as any of the input Promises resolve. The resolved value is the value of the first resolved Promise.
// -- Rejects only when all of the input Promises reject. The rejection reason is an AggregateError containing 
//      all the rejection reasons.

// In summary:

// Promise.all: All succeed or one fails.       | fail fast
// Promise.allSettled: Waits for all to finish, regardless of success or failure.       | all settled must
// Promise.race: First to finish wins.          | first of the input promise 
// Promise.any: First to succeed wins, fails only if all fail.          | AggregateError if all fails else success


// Use Cases:

// -- Fetching Multiple Data: Making multiple API requests concurrently and waiting for all of them to complete before
// processing the combined results.
// -- Performing Parallel Operations: Executing several independent asynchronous tasks and waiting for all of them to finish.
// -- Coordinating Asynchronous Flows: Ensuring that multiple asynchronous steps are completed before proceeding to the next stage.




// const p1 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         // console.log(`P1 logged`);
//     }, 3000);
//     resolve('P1 output');
// });
// const p2 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         // console.log(`P2 logged`);
//     }, 1500);
//     resolve('P2 output');
// });
// const p3 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         // console.log(`P3 logged`);
//     }, 2000);
//     // resolve('P3 output');
//     reject('P3 some error');
// });



// Promise.all([p1, p2, p3])
// .then((output)=>{
//     console.log(output);
// })
// .catch((err) => {
//     console.error(`Error is : ${err}`);
// });

// Promise.allSettled([p1, p2, p3])
// .then((output)=>{
//     console.log(output);
// })
// .catch((err) => {
//     console.error(`Error is : ${err}`);
// });

// Note : waits for first input promise setteled only
// Promise.race([p2, p3, p1])
// .then((output)=>{
//     console.log(output);
// })
// .catch((err) => {
//     console.error(`Error is : ${err}`);
// });

// Promise.any([p1, p3, p2])
// .then((output)=>{
//     console.log(output);
// })
// .catch((err) => {
//     console.error(`Error is : ${err}`);
// });


