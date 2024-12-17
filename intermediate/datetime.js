// 1. Date Object in JavaScript
// The JavaScript Date object is used to work with dates and times. It provides methods to create, 
// manipulate, and format dates.

// Creating a Date Object
// Current Date and Time
// const now = new Date();
// console.log(now); // Example Output: 2024-12-17T03:01:55.837Z

// Specific Date
// const specificDate = new Date('2023-05-16T10:00:00');
// console.log(specificDate);
// // Output: Tue May 16 2023 10:00:00 GMT+0530 (India Standard Time)

// Using Year, Month, Day, etc.
// const dateFromParts = new Date(2023, 4, 16, 10, 0, 0); // Month is 0-indexed
// console.log(dateFromParts);
// // Output: Tue May 16 2023 10:00:00 GMT+0530 (India Standard Time)

// From Timestamp
// const dateFromTimestamp = new Date(1684233000000); // Timestamp in milliseconds
// console.log(dateFromTimestamp);
// // Output: Tue May 16 2023 10:00:00 GMT+0530 (India Standard Time)

// Common Methods of the Date Object
// Get Date Components
// const now = new Date();
// console.log(now.getFullYear()); // Year (e.g., 2023)
// console.log(now.getMonth());    // Month (0-11, 0 = January)
// console.log(now.getDate());     // Day of the month (1-31)
// console.log(now.getHours());    // Hours (0-23)
// console.log(now.getMinutes());  // Minutes (0-59)
// console.log(now.getSeconds());  // Seconds (0-59)
// console.log(now.getMilliseconds()); // Milliseconds (0-999)
// console.log(now.getDay());      // Day of the week (0 = Sunday, 6 = Saturday)

// Set Date Components
// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(6); // 6 = July
// date.setDate(20);
// console.log(date);
// // Output: Sun Jul 20 2025 15:45:30 GMT+0530 (India Standard Time)

// Timestamps
// const now = new Date();
// console.log(now.getTime()); // Number of milliseconds since Jan 1, 1970 (Unix Epoch)
// // Example Output: 1734404701366

// 2. Formatting and Calculating Dates
// Formatting Dates
// Using toLocaleDateString()
// const now = new Date();
// console.log(now.toLocaleDateString('en-US')); // Output: 5/16/2023 (MM/DD/YYYY)
// console.log(now.toLocaleDateString('en-GB')); // Output: 16/05/2023 (DD/MM/YYYY)

// Using toLocaleTimeString()
// const now = new Date();
// console.log(now.toLocaleTimeString('en-US')); // Output: 3:45:30 PM
// console.log(now.toLocaleTimeString('en-GB')); // Output: 15:45:30

// Using toISOString()
// const now = new Date();
// console.log(now.toISOString());
// // Output: 2023-05-16T10:15:30.000Z

// Custom Formatting
// const now = new Date();
// const formatted = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
// console.log(formatted);
// // Output: 2023-5-16

// Calculating Dates
// Add/Subtract Days
// const now = new Date();
// const futureDate = new Date(now);
// futureDate.setDate(futureDate.getDate() + 7); // Add 7 days
// console.log(futureDate);
// // Output: Tue May 23 2023 15:45:30 GMT+0530 (India Standard Time)

// Difference Between Dates
// const start = new Date('2023-05-01');
// const end = new Date('2023-05-16');
// const diffInMs = end - start;
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Convert ms to days
// console.log(diffInDays);
// // Output: 15

// Compare Dates
// const date1 = new Date('2023-05-16');
// const date2 = new Date('2023-05-17');

// if (date1 < date2) {
//   console.log("date1 is earlier than date2");
// } else if (date1 > date2) {
//   console.log("date1 is later than date2");
// } else {
//   console.log("Both dates are the same");
// }
// // Output: date1 is earlier than date2

// Get Start of the Day
// const now = new Date();
// const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// console.log(startOfDay);
// // Output: Tue May 16 2023 00:00:00 GMT+0530 (India Standard Time)

// Calculate Elapsed Time
// const start = new Date('2023-05-01T10:00:00');
// const end = new Date('2023-05-01T15:30:00');
// const elapsedMs = end - start; // Milliseconds
// const elapsedMinutes = elapsedMs / (1000 * 60);
// console.log(elapsedMinutes);
// // Output: 330 (5 hours and 30 minutes)

// Real-Life Use Case: Deadline Calculation
// function getDeadline(daysToAdd) {
//   const now = new Date();
//   const deadline = new Date(now);
//   deadline.setDate(now.getDate() + daysToAdd);
//   return deadline.toLocaleDateString('en-US');
// }
// console.log(getDeadline(7));
// // Output: 5/23/2023 (7 days from now)

// These topics are crucial when working with dates and times in JavaScript. 
// The Date object is highly versatile but can be tricky to work with due to differences in time zones
// and formats. Libraries like Moment.js or date-fns are often used for advanced date handling.
