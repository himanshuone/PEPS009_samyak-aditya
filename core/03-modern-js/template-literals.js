// =====================================
// Topic: Template Literals
// Difficulty: Beginner
// Interview Importance: ⭐⭐
// =====================================

const name = "Alice";
const age = 22;

// 1. String Interpolation
// Old Way:
const greeting = "Hello " + name + ", you are " + age + " years old.";

// New Way (Backticks `):
const newGreeting = `Hello ${name}, you are ${age} years old.`;
console.log(newGreeting);


// 2. Multi-line Strings
const html = `
    <div>
        <h1>${name}</h1>
        <p>Values can be expressions too: ${age + 10}</p>
    </div>
`;

console.log(html);


// 3. Tagged Templates (Advanced Interview Q)
// Used by libraries like Styled Components
function highlight(strings, ...values) {
    // strings: ["Your price is $", ""]
    // values: [50]
    return strings[0] + values[0] + "!!";
}

const price = 50;
console.log(highlight`Your price is $${price}`); // "Your price is $50!!"
