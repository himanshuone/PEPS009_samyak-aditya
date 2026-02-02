// =====================================
// Topic: Block Scope
// Difficulty: Beginner
// Interview Importance: ⭐⭐⭐
// =====================================

// Definition:
// A block is code inside { curly braces }.
// 'let' and 'const' are block-scoped. 'var' is NOT.

{
    let secret = "12345";
    const password = "admin";
    var visible = "Hello World";
}

// console.log(secret); // ❌ ReferenceError
// console.log(password); // ❌ ReferenceError

console.log(visible); // ✅ "Hello World" (because var ignores blocks)

// Real World Impact:
// Always use 'let' or 'const' to prevent variables from "leaking"
// into places they shouldn't be.
