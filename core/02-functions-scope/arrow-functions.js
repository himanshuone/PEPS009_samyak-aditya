// =====================================
// Topic: Arrow Functions
// Difficulty: Beginner
// Interview Importance: ⭐⭐
// =====================================

// 1. Syntax Difference
// Regular Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b; // Implicit return!

console.log(add(5, 5));
console.log(addArrow(5, 5));

// 2. 'this' Keyword (CRITICAL INTERVIEW Q)
// Regular functions have their own 'this'.
// Arrow functions INHERIT 'this' from the parent scope.

const user = {
    name: "John",
    sayHi: function () {
        console.log("Regular:", this.name); // "John"
    },
    sayHiArrow: () => {
        console.log("Arrow:", this.name); // undefined (inherits global 'this')
    }
};

user.sayHi();
user.sayHiArrow();

// Recommendation:
// Use Arrow functions for callbacks and simple logic.
// Use Regular functions when you need dynamic 'this' or used as Object methods.
