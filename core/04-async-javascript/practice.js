// =====================================
// Topic: Async Javascript Practice
// Difficulty: Interview Level
// =====================================

// Q1: Convert this Promise chain to Async/Await
function getData() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

// TODO: Write async function 'getDataAsync' here


// Q2: Fix the code below so it prints "First", "Second", "Third" in order
// (Currently it prints "First", "Third", "Second")
function printOrder() {
    console.log("First");
    setTimeout(() => console.log("Second"), 1000);
    console.log("Third");
}


// Q3: Create a function 'wait(ms)' that returns a Promise
// which resolves after 'ms' milliseconds.
// Usage: await wait(2000);

// TODO: Write code here
