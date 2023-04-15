/*
Understanding and using path modules can greatly simplify file and directory operations in Node.js applications
*/

// // path.join([...paths])
// // Joins all given path segments together using the platform-specific separator and returns the normalized concatenated path

// const path = require('path');

// const dir = '/Users/username/Documents';
// const file = 'file.txt';

// const fullPath = path.join(dir, file);
// console.log(fullPath); // Output: /Users/username/Documents/file.txt

// // path.resolve([...paths])
// // Resolves an absolute or relative path to an absolute path

// const path = require('path');

// const relativePath = './documents/file.txt';
// const absolutePath = path.resolve(relativePath);
// console.log(absolutePath); // Output: /Users/username/Documents/file.txt (assuming the current working directory is /Users/username)

// // path.basename(p, [ext])
// // Returns the last portion of a path as a string
// const path = require('path');

// const filePath = '/Users/username/Documents/file.txt';
// const fileName = path.basename(filePath);
// console.log(fileName); // Output: file.txt

// // path.dirname(p)
// // Returns the directory name of a path as a string

// const path = require('path');

// const filePath = '/Users/username/Documents/file.txt';
// const dirName = path.dirname(filePath);
// console.log(dirName); // Output: /Users/username/Documents

// // path.extname(p)
// // Returns the file extension of a path as a string
// const path = require('path');

// const filePath = '/Users/username/Documents/file.txt';
// const ext = path.extname(filePath);
// console.log(ext); // Output: .txt


// // path.isAbsolute(p)
// // Determines if a given path is an absolute path
// const path = require('path');

// const relativePath = './documents/file.txt';
// const absolutePath = '/Users/username/Documents/file.txt';

// console.log(path.isAbsolute(relativePath)); // Output: false
// console.log(path.isAbsolute(absolutePath)); // Output: true

// path.relative(from, to)
// Returns the relative path from one location to another
const path = require('path');

const toPath = '/home/assocmaster/Desktop/CODES/techquest/class codes/';
const fromPath = '/home/assocmaster/Desktop';

const relativePath = path.relative(fromPath, toPath);
console.log(relativePath);


