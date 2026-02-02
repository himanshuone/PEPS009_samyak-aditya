// =====================================
// Topic: let, const, and var
// Difficulty: Beginner
// Interview Importance: ⭐⭐⭐⭐
// =====================================

// 1. var (The Old Way 👴)
// - Function Scoped
// - Can be re-declared
// - HOISTED as undefined
var a = 10;
var a = 20; // No error!
console.log(a); // 20

// 2. let (The Modern Way ⚡)
// - Block Scoped {}
// - Cannot be re-declared in same scope
// - HOISTED but in TDZ (Temporal Dead Zone)
let b = 30;
// let b = 40; // ❌ SyntaxError: Identifier 'b' has already been declared
b = 40; // Reassigning is OK!
console.log(b); // 40

// 3. const (Constant 🔒)
// - Block Scoped {}
// - Cannot be reassigned
const c = 50;
// c = 60; // ❌ TypeError: Assignment to constant variable.

// Note: Objects declared with const CAN be mutated!
const user = { name: "Sam" };
user.name = "Alex"; // ✅ This is allowed!
console.log(user); 
