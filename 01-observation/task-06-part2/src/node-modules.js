// TASK 6: BUILT-IN NODE.JS MODULES
const os = require('os');
const path = require('path');
const fs = require('fs');

// 1. OS Module Example
console.log(`OS Platform: ${os.platform()}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);

// 2. Path Module Example
// Safely joins directories regardless of the operating system
const constructedPath = path.join(__dirname, 'logs', 'app.log');
console.log(`Constructed Path: ${constructedPath}`);

// 3. FS (File System) Module Example
const filePath = 'test-file.txt';

// Write to a file
fs.writeFileSync(filePath, 'Hello, Node.js File System!');
// Read from the file
const fileContent = fs.readFileSync(filePath, 'utf8');

console.log(`File Content: ${fileContent}`);

// Cleanup for testing purposes
fs.unlinkSync(filePath);