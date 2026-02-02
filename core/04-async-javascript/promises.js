// =====================================
// Topic: Promises
// Difficulty: Intermediate
// Interview Importance: ⭐⭐⭐⭐⭐
// =====================================

// Definition:
// A Promise is an object representing the eventual completion (or failure)
// of an asynchronous operation.

// 3 States:
// 1. Pending: Initial state.
// 2. Fulfilled (Resolved): Operation completed successfully.
// 3. Rejected: Operation failed.

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("Operation Successful! 🚀");
        } else {
            reject("Operation Failed ❌");
        }
    }, 2000);
});

console.log("1. Request start");

myPromise
    .then((message) => {
        console.log("2. Success:", message);
    })
    .catch((error) => {
        console.log("2. Error:", error);
    })
    .finally(() => {
        console.log("3. Cleanup (Always runs)");
    });

console.log("4. Request sent (I don't wait!)");


// Promise.all() (Interview Q)
// Runs multiple promises in parallel and waits for ALL to finish.
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = new Promise((res) => setTimeout(() => res("C"), 1000));

Promise.all([p1, p2, p3]).then((values) => {
    console.log("All finished:", values); // ["A", "B", "C"]
});
