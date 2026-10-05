// TASK 7: EXTERNAL PACKAGES (Ensure 'npm install uuid' is run first)
// Importing the installed external package
const { v4: uuidv4 } = require('uuid');

function createNewSession() {
    // Utilizing the external package to generate a secure UUID
    const sessionToken = uuidv4();
    console.log(`New Session Generated: ${sessionToken}`);
}

// Execution / Output Demonstration
createNewSession();