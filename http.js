// // http.createServer(): Creates a new HTTP server instance. Takes a callback function as an argument that gets called on each incoming request.

const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World!');
});
server.listen(3000, () => {
  console.log('Server started on port 3000');
});  

// // http.request(): Sends an HTTP request to the specified server. Returns a ClientRequest instance.


// const http = require('http');
// const options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/',
//   method: 'GET'
// };

// const req = http.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`);
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (error) => {
//   console.error(error);
// });

// req.end();


// // http.get(): Sends an HTTP GET request to the specified server. Returns a ClientRequest instance.

// const http = require('http');

// http.get('http://www.google.com', (res) => {
//   console.log(`statusCode: ${res.statusCode}`);
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// }).on('error', (e) => {
//   console.error(e);
// });


// // http.ServerResponse.write(): Sends a chunk of the response body to the client. Can be called multiple times to send larger responses.

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.write('Hello');
//   res.write('World!');
//   res.end();
// });
// server.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

// // http.ServerResponse.end(): Signals to the server that all of the response headers and body have been sent; that server should consider this message complete.

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Hello World!');
// });
// server.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

// // http.Server.listen(): Binds the server to the specified port and hostname. The port and hostname can be passed as arguments, or a single object containing the port and hostname can be passed.

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Hello World!');
// });
// server.listen({ port: 3000, hostname: 'localhost' }, () => {
//   console.log('Server started on port 3000');
// });
