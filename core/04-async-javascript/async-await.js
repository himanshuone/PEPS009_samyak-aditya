// =====================================
// Topic: Async / Await
// Difficulty: Intermediate
// Interview Importance: ⭐⭐⭐⭐⭐
// =====================================

// Definition:
// Syntactic sugar built on top of Promises. 
// It makes async code look and behave like synchronous code.

function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: "Sam" });
        }, 1000);
    });
}

// Old Way (.then chains)
// getUser(1).then(user => console.log(user));

// New Way (Async/Await)
async function showUser() {
    try {
        console.log("Fetching...");

        // 'await' PAUSES execution here until Promise resolves
        const user = await getUser(1);

        console.log("User found:", user);
    } catch (error) {
        console.log("Error:", error); // Replaces .catch()
    }
}

showUser();


// Common Interview Q:
// "Does await block the main thread?"
// No! It only pauses the execution inside the 'async' function.
// The rest of the app execution continues (Event Loop magic).
