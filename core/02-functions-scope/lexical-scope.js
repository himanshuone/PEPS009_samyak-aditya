// =====================================
// Topic: Lexical Scope
// Difficulty: Intermediate
// Interview Importance: ⭐⭐⭐
// =====================================

// Definition:
// Inner functions have access to variables defined in their outer scope.
// This is determined by WHERE the code is written (Lexical), not where it is called.

function outer() {
    const outerVar = "I am outside!";

    function inner() {
        // 'inner' can see 'outerVar' because it's lexically inside 'outer'
        console.log(outerVar);
    }

    inner();
}

outer(); // Logs: "I am outside!"

// Scope Chain:
// inner scope -> outer scope -> global scope
// JavaScript looks UP the chain to find variables.
