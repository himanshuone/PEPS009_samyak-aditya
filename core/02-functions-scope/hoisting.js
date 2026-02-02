// =====================================
// Topic: Hoisting
// Difficulty: Intermediate
// Interview Importance: ⭐⭐⭐
// =====================================

// Definition:
// JavaScript moves declarations to the top of the scope before execution.

// 1. Function Hoisting
// You can call a regular function BEFORE it is defined.
sayHello(); // ✅ Works

function sayHello() {
    console.log("Hello!");
}


// 2. Variable Hoisting (The Trick)
console.log(age); // undefined (Not ReferenceError!)
var age = 20;

// Internal view of the above code:
// var age;       // Hoisted to top
// console.log(age);
// age = 20;


// 3. 'let' and 'const' Hoisting
// They ARE hoisted, but they land in the "Temporal Dead Zone" (TDZ).
// Accessing them before declaration throws an Error.

// console.log(name); // ❌ ReferenceError: Cannot access 'name' before initialization
let name = "Sam";


// 4. Function Expression Hoisting
// behave like variables.

// greet(); // ❌ TypeError: greet is not a function
var greet = function () {
    console.log("Hi");
};
