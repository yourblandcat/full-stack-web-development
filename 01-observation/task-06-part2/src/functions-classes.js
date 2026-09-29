// TASK 5: FUNCTIONS VS CLASSES

// 1. Traditional Function Constructor
function UserFunction(name) {
    this.name = name;
}
UserFunction.prototype.greet = function() {
    console.log(`Hello from Function, ${this.name}!`);
};

// 2. Modern ES6 Class syntax 
class UserClass {
    // The constructor initializes common properties for every new object
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    // Methods defined here are shared across all instances
    displayProfile() {
        console.log(`User: ${this.name} | Role: ${this.role}`);
    }
}

// Creating multiple unique objects that share the same class blueprint
const user1 = new UserClass("Alice", "Admin");
const user2 = new UserClass("Bob", "Editor");

// Execution / Output Demonstration
user1.displayProfile(); 
user2.displayProfile();