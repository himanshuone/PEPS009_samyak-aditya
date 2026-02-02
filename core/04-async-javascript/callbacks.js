// =====================================
// Topic: Callbacks
// Difficulty: Intermediate
// Interview Importance: ⭐⭐⭐
// =====================================

// Definition:
// A function passed into another function as an argument, 
// which is then invoked inside the outer function.

// 1. Synchronous Callback
// Executed immediately.
const numbers = [1, 2, 3];
numbers.forEach((n) => console.log(n));


// 2. Asynchronous Callback
// Executed after an operation finishes (e.g., IO, Timer).

console.log("Start");

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback("User Data");
    }, 2000);
}

fetchData((data) => {
    console.log("Processing:", data);
});

console.log("End");

// Output Order:
// Start
// End
// Data fetched (after 2s)
// Processing: User Data


// 3. Callback Hell (The Problem)
// Nested callbacks making code hard to read.
/*
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c);
        });
    });
});
*/
// Solution? PROMISES! (See next file)
