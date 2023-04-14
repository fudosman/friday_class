// // Reading from a file using fs.readFile():
// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


// // Writing to a file using fs.writeFileSync():
// const fs = require('fs');

// fs.writeFileSync('example.txt', 'Hello, World!', 'utf8');

// // Appending data to a file using fs.appendFile():
// const fs = require('fs');

// fs.appendFile('example.txt', 'Appended Data', 'utf8', (err) => {
//   if (err) throw err;
//   console.log('Data appended to file!');
// });

// // Creating a readable stream from a file using fs.createReadStream():
// const fs = require('fs');

// const readableStream = fs.createReadStream('example.txt', 'utf8');

// readableStream.on('data', (chunk) => {
//   console.log(chunk);
// });

// readableStream.on('end', () => {
//   console.log('Read stream finished!');
// });

// // Creating a writable stream to a file using fs.createWriteStream():
// const fs = require('fs');

// const writableStream = fs.createWriteStream('example.txt', 'utf8');

// writableStream.write('Hello, World!');
// writableStream.end();


// // Renaming a file using fs.rename():
// const fs = require('fs');

// fs.rename('oldfile.txt', 'newfile.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed successfully!');
// });


// // Deleting a file using fs.unlink():
// const fs = require('fs');

// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted successfully!');
// });

// // Checking if a file or directory exists using fs.existsSync():
// const fs = require('fs');

// const fileExists = fs.existsSync('example.txt');
// if (fileExists) {
//   console.log('File exists!');
// } else {
//   console.log('File does not exist!');
// }

// // Creating a directory using fs.mkdir():

// const fs = require('fs');

// fs.mkdir('myDirectory', (err) => {
//   if (err) throw err;
//   console.log('Directory created successfully!');
// });


// // Removing a directory using fs.rmdir():
// const fs = require('fs');

// fs.rmdir('myDirectory', (err) => {
//   if (err) throw err;
//   console.log('Directory removed successfully!');
// });


