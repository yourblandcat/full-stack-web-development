// fileManager.js
const fs = require('fs');
const readline = require('readline');

// Setup readline interface to accept user input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the filename (e.g., test.txt): ', (filename) => {
    rl.question('Enter the initial file content: ', (content) => {
        
        // 1. Create and write to the file
        fs.writeFileSync(filename, content);
        console.log(`\n[Success] File '${filename}' created and written.`);

        // 2. Read and display the current contents
        const initialRead = fs.readFileSync(filename, 'utf8');
        console.log(`[Read] Current contents: ${initialRead}`);

        // 3. Append additional content to the file
        const additionalContent = '\nAppended Data: This line was added subsequently.';
        fs.appendFileSync(filename, additionalContent);
        console.log(`[Success] Additional content appended.`);

        // 4. Display the final file contents
        const finalRead = fs.readFileSync(filename, 'utf8');
        console.log(`\n--- Final Contents of ${filename} ---\n${finalRead}`);

        // Close the input stream
        rl.close();
    });
});