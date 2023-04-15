// Reading from a file using fs.readFile():
// const fs = require('fs');

// fs.readFile('exam.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Reading from a directory
// const fs = require('fs');

// fs.readdir("/home/assocmaster/Desktop/CODES/techquest/class codes", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })


// Writing to a file using fs.writeFileSync():
// const fs = require('fs');

// fs.writeFileSync('example.txt', 'hi how do you do?', 'utf8');

// Appending data to a file using fs.appendFile():
// const fs = require('fs');

// fs.appendFile('example.txt', ' newly appended file', 'utf8', (err) => {
//   if (err) throw err;
//   console.log('check your example.txt file to view the appened text!');
// });

// delete the example.txt file from the folder
// const fs = require('fs');

// fs.unlink('example.txt', (err) => {
//   if (err) throw new Error(err);
//   console.log('this file has been removed');
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

// Creating a writable stream to a file using fs.createWriteStream():
// const fs = require('fs');

// const writableStream = fs.createWriteStream('example.txt', 'utf8');
// let str = `
// The monkey is a fascinating creature known for its playful antics and curious nature. With its agile limbs and expressive face, the monkey is a skilled climber and adept at swinging from branch to branch with ease. Its dexterous hands and opposable thumbs allow it to manipulate objects, such as peeling bananas or grooming its fur. Monkeys are highly social animals, living in close-knit groups called troops, and engaging in complex social interactions. They communicate with each other using a variety of vocalizations, gestures, and facial expressions. Monkeys have a diverse diet, ranging from fruits and insects to leaves and small animals. Their intelligence and problem-solving abilities are impressive, with some species known for using tools to obtain food or solve puzzles. Monkeys are found in various habitats, including tropical rainforests, savannas, and mountains, and are known for their adaptability to different environments. Despite their playful nature, monkeys are wild animals and should be observed from a safe distance in their natural habitats, respecting their wildness and preserving their natural behavior. Monkeys have also been revered in many cultures for their symbolism, often associated with agility, curiosity, and mischief. In popular culture, monkeys have been depicted in literature, art, and films, capturing the imaginations of people around the world. From their acrobatic abilities to their intricate social dynamics, monkeys are truly remarkable creatures that continue to fascinate and captivate both researchers and nature enthusiasts alike.
// `
// writableStream.write(str);
// writableStream.end();


// Renaming a file using fs.rename():
// const fs = require('fs');

// fs.rename("oldfile.js", "vivian.js", (err) => {
//   if (err) throw err;
//   console.log('File renamed successfully!');
// });


// // Deleting a file using fs.unlink():
// const fs = require('fs');

// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted successfully!');
// });

// Checking if a file or directory exists using fs.existsSync():
// const fs = require('fs');

// const fileExists = fs.existsSync('vivian.js');
// console.log({
//   fileExists: fileExists,
// });
// if (fileExists) {
//   console.log('File exists!');
// } else {
//   console.log('File does not exist!');
// }

// // the status of a file
// const fs = require('fs');

// fs.stat("readline.js", function (err, data) {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log(data);
// })



// // Creating a directory using fs.mkdir():

// const fs = require('fs');

// fs.mkdir('/home/assocmaster/Desktop/dabere', (err) => {
//   if (err) throw err;
//   console.log('Directory created successfully!');
// });


// Removing a directory using fs.rmdir():
// const fs = require('fs');

// fs.rmdir('/home/assocmaster/Desktop/papaya', (err) => {
//   if (err) throw err;
//   console.log('Directory removed successfully!');
// });

// Wachting a directory or a file
// const fs = require('fs');

// fs.watch("readline.js", "utf-8", function (err, data) {
//   console.log(data);
// });

