// =====================================
// Topic: var vs let (Scope Difference)
// Difficulty: Intermediate
// Interview Importance: ⭐⭐⭐⭐⭐
// =====================================

// Scenario 1: Function Scope vs Block Scope

function testScope() {
    if (true) {
        var varVariable = "I am VAR";
        let letVariable = "I am LET";
    }

    console.log(varVariable); // ✅ "I am VAR" (leaks out of if block)
    // console.log(letVariable); // ❌ ReferenceError: letVariable is not defined
}

testScope();

// Scenario 2: The Loop Problem (Interview Classic!)

console.log("--- Loop using VAR ---");
for (var i = 0; i < 3; i++) {
    // Shared 'i' variable for all iterations
    setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (Why? Because 'i' is 3 when the loops finishes, and setTimeout runs later)


console.log("--- Loop using LET ---");
for (let j = 0; j < 3; j++) {
    // New 'j' binding for EACH iteration
    setTimeout(() => console.log(j), 1000);
}
// Output: 0, 1, 2
