// // Formatting and inspecting objects:
// const util = require('util');

// // util.format(format[, ...args]): Returns a formatted string using a format specifier and optional arguments.
// const formattedString = util.format('%s is %d years old', 'John', 30);
// console.log(formattedString); // Output: 'John is 30 years old'

// // util.inspect(object[, options]): Returns a string representation of an object for debugging purposes.
// const obj = { name: 'Alice', age: 25 };
// console.log(util.inspect(obj)); // Output: '{ name: 'Alice', age: 25 }'


// // Handling errors:
// const util = require('util');

// // util.error([message]): Creates a new Error object with an optional error message.
// const error = util.error('This is an error message');
// console.error(error); // Output: 'Error: This is an error message'

// // util.isError(object): Returns true if the given object is an instance of the Error class or inherits from it.
// console.log(util.isError(new Error())); // Output: true
// console.log(util.isError({})); // Output: false



// // Working with streams:
// const util = require('util');
// const fs = require('fs');

// // util.callbackify(original): Returns a version of a function that uses callbacks instead of promises.
// const readFilePromise = util.promisify(fs.readFile);
// const readFileCallback = util.callbackify(readFilePromise);
// readFileCallback('file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // util.finished(stream[, callback]): Calls a callback when a stream is finished or an error occurs.
// const readableStream = fs.createReadStream('file.txt');
// util.finished(readableStream, (err) => {
//   if (err) throw err;
//   console.log('Stream finished');
// });

// // util.pipeline([...streams], callback): Pipes a series of streams together and calls a callback when they are all finished.
// const readableStream1 = fs.createReadStream('file1.txt');
// const readableStream2 = fs.createReadStream('file2.txt');
// const writableStream = fs.createWriteStream('output.txt');
// util.pipeline([readableStream1, readableStream2], writableStream, (err) => {
//   if (err) throw err;
//   console.log('Piping finished');
// });



// // Converting callbacks to promises:
// const util = require('util');
// const fs = require('fs');

// // util.promisify(original): Returns a version of a function that returns a promise instead of using callbacks.
// const readFilePromise = util.promisify(fs.readFile);
// readFilePromise('file.txt', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));



// // Inheriting prototype methods:
// const util = require('util');

// // util.inherits(constructor, superConstructor): Inherit the prototype methods from one constructor into another.
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log('Animal speaks');
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// util.inherits(Dog, Animal);

// const dog = new Dog('Buddy');
// dog.speak(); // Output: 'Animal speaks'


// // Miscellaneous utility functions:
// // util.types: This property provides access to the JavaScript built-in types, such as Array, Date, RegExp, etc., as well as custom types. It can be used to check the type of an object, for example:

// const util = require('util');

// console.log(util.types.isArray([])); // true
// console.log(util.types.isDate(new Date())); // true
// console.log(util.types.isRegExp(/regex/)); // true
// // and so on...


// // util.deprecate(function, string): This function wraps a function with a deprecation warning message. It can be used to mark a function or method as deprecated and provide a custom warning message when it is used:

// const util = require('util');

// function deprecatedFunction() {
//   console.log('This function is deprecated!');
// }

// const deprecatedFn = util.deprecate(deprecatedFunction, 'This function is deprecated. Please avoid using it.');

// deprecatedFn(); // logs the warning message and invokes the deprecatedFunction
