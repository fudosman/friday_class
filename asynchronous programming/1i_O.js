// Example 1: Reading user input from the console using Node.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
// End of Example 1

// Example 2: Writing output to a file using Node.js
const fs = require('fs');

fs.writeFile('output.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('Data written to file successfully.');
});
// End of Example 2

// Example 3: Implementing asynchronous I/O using Promises in JavaScript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully.'); // Simulating a successful I/O operation
    }, 2000); // Simulating a 2-second delay
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
// End of Example 3

// Example 4: Using buffering to optimize I/O performance in Node.js
const fs = require('fs');

const readable = fs.createReadStream('large_file.txt');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable);
// End of Example 4
