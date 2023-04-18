// Parsing and Stringifying URL Query Strings:
const querystring = require('querystring');

const query = 'name=John&age=30&city=New%20York';

// Parsing a query string
const parsed = querystring.parse(query);
console.log('Parsed:', parsed);

// Stringifying an object to a query string
const obj = { name: 'John', age: 30, city: 'New York' };
const stringified = querystring.stringify(obj);
console.log('Stringified:', stringified);

// Encoding and Decoding URL Components:
const querystring = require('querystring');

const str = 'hello world!';
const encoded = querystring.escape(str);
console.log('Encoded:', encoded);

const decoded = querystring.unescape(encoded);
console.log('Decoded:', decoded);
