// =====================================
// Topic: Closures
// Difficulty: Advanced
// Interview Importance: ⭐⭐⭐⭐
// =====================================

// Definition:
// A closure is a function that remembers its outer variables even after 
// the outer function has returned.

// Example 1: Basic Closure
function createCounter() {
    let count = 0; // Private variable

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
// createCounter has finished execution, but 'count' is still remembered!

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter(); // New separate closure
console.log(counter2()); // 1


// Example 2: Practical Use - Data Hiding
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Cannot be accessed directly

    return {
        deposit: (amount) => {
            balance += amount;
            return `Deposited ${amount}. Balance: ${balance}`;
        },
        withdraw: (amount) => {
            if (amount > balance) return "Insufficient funds";
            balance -= amount;
            return `Withdrew ${amount}. Balance: ${balance}`;
        }
    };
}

const myAccount = createBankAccount(100);
console.log(myAccount.deposit(50));
// myAccount.balance = 1000000; // ❌ Won't work! Balance is private.
