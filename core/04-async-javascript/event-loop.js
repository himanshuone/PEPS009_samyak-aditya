// =====================================
// Topic: The Event Loop
// Difficulty: Advanced
// Interview Importance: ⭐⭐⭐⭐⭐
// =====================================

// JS is Single Threaded (One thing at a time).
// How does it handle async tasks? The Event Loop!

console.log("1. Start");

// Web API (Timer)
setTimeout(() => {
    console.log("2. Timeout (Callback Queue)");
}, 0);

// Promise (Microtask Queue)
Promise.resolve().then(() => {
    console.log("3. Promise (Microtask Queue)");
});

console.log("4. End");

// Actual Output Order:
// 1. Start
// 4. End
// 3. Promise
// 2. Timeout

// WHY? 🧠
// 1. Sync code runs first (Call Stack).
// 2. Promises go to 'Microtask Queue' (High Priority).
// 3. setTimeout goes to 'Callback Queue' (Low Priority).
// 4. Event Loop checks: Stack empty? -> Run Microtasks -> Run Callbacks.
