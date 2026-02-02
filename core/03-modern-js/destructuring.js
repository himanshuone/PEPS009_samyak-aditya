// =====================================
// Topic: Destructuring (ES6)
// Difficulty: Beginner
// Interview Importance: ⭐⭐⭐
// =====================================


/******************************************************
 * WHAT IS DESTRUCTURING IN JAVASCRIPT?
 ******************************************************/

/*
Destructuring is a shortcut syntax in JavaScript
that allows us to extract values from
arrays or objects and store them into variables
in a clean and readable way.

Instead of accessing values one by one,
we can "unpack" them in a single line.
*/


// 1. Array Destructuring 📦
// Unpacking values from arrays into distinct variables.

const rgb = [255, 200, 0];

// Old Way:
// const r = rgb[0];
// const g = rgb[1];

// New Way:
const [red, green, blue] = rgb;
console.log(red); // 255
console.log(green); // 200

// Skipping items:
const [first, , third] = ["HTML", "CSS", "JS"];
console.log(first, third); // "HTML", "JS"


// 2. Object Destructuring 📦
// Unpacking properties from objects.

const user = {
    id: 42,
    username: "coder_123",
    role: "admin"
};

const { username, role } = user;
console.log(username); // "coder_123"

// Renaming variables:
const { id: userId } = user;
console.log(userId); // 42


// 3. Application: Function Parameters
// Very common in React props!
function displayUser({ username, role }) {
    console.log(`User ${username} is an ${role}`);
}

displayUser(user);
