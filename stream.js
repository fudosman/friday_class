// // read(size): Reads data from the stream and returns it, or null if no data is available. Example:


// const readableStream = fs.createReadStream('file.txt');
// readableStream.on('readable', () => {
//   let chunk;
//   while ((chunk = readableStream.read()) !== null) {
//     console.log(`Received ${chunk.length} bytes of data`);
//   }
// });

// // pipe(destination[, options]): Pipes data from the readable stream to a writable stream. Example:
// const readableStream = fs.createReadStream('file.txt');
// const writableStream = fs.createWriteStream('output.txt');
// readableStream.pipe(writableStream);


// // unpipe([destination]): Stops piping data from the readable stream to a writable stream. Example:
// const readableStream = fs.createReadStream('file.txt');
// const writableStream = fs.createWriteStream('output.txt');
// const pipe = readableStream.pipe(writableStream);
// // Later, stop piping data
// readableStream.unpipe(writableStream);

// // pause(): Pauses the readable stream, preventing it from emitting 'data' events. Example:
// const readableStream = fs.createReadStream('file.txt');
// readableStream.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data`);
//   readableStream.pause(); // Pause the stream after receiving one chunk
// });


// resume(): Resumes a paused readable stream.Example:
// const readableStream = fs.createReadStream('file.txt');
// readableStream.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data`);
//   readableStream.pause(); // Pause the stream after receiving one chunk
// });
// // Later, resume the stream
// readableStream.resume();


// // isPaused(): Returns true if the readable stream is paused, false otherwise. Example:

// const readableStream = fs.createReadStream('file.txt');
// console.log(readableStream.isPaused()); // false
// readableStream.pause();
// console.log(readableStream.isPaused()); // true


// // setEncoding(encoding): Sets the encoding of the readable stream. Example:
// const readableStream = fs.createReadStream('file.txt', { encoding: 'utf8' });
// readableStream.on('data', (chunk) => {
//   console.log(`Received data: ${chunk}`);
// });


// // destroy([error]): Closes the readable stream and optionally emits an error event. Example:
// const readableStream = fs.createReadStream('file.txt');
// readableStream.on('end', () => {
//   console.log('End of data');
// });
// readableStream.destroy(); // Close the stream


// // write(chunk[, encoding][, callback]): Writes data to the writable stream. Example:
// const writableStream = fs.createWriteStream('output.txt');
// writableStream.write('Hello, ');
// writableStream.write('world!', () => {
//   console.log('Data has been written');
// });

// // end([chunk][, encoding][, callback]): Writes the last chunk of data to the writable stream and closes it. Example:
// const writableStream = fs.createWriteStream('output.txt');
// writableStream.write('Hello, ');
// writableStream.end('world!', () => {
//   console.log('Data has been written and stream has been closed');
// });

