// const url = require('url');

// // Example usage of url.parse()
// const urlString = 'https://www.example.com/some/path?param1=value1&param2=value2';
// const parsedUrl = url.parse(urlString, true);
// console.log('Parsed URL:', parsedUrl);

// // Example usage of url.format()
// const urlObject = {
//   protocol: 'https:',
//   host: 'www.example.com',
//   pathname: '/some/path',
//   search: 'param1=value1&param2=value2'
// };
// const formattedUrl = url.format(urlObject);
// console.log('Formatted URL:', formattedUrl);

// // Example usage of url.resolve()
// const from = 'https://www.example.com/some/base';
// const to = '/some/relative/path';
// const resolvedUrl = url.resolve(from, to);
// console.log('Resolved URL:', resolvedUrl);

// // Example usage of url.formatSearchParams()
// const searchParams = new URLSearchParams({ param1: 'value1', param2: 'value2' });
// const formattedSearchParams = url.formatSearchParams(searchParams);
// console.log('Formatted Search Params:', formattedSearchParams);

// // Example usage of url.parseQueryString()
// const queryString = 'param1=value1&param2=value2';
// const parsedQueryString = url.parseQueryString(queryString);
// console.log('Parsed Query String:', parsedQueryString);

// // Example usage of url.resolveObject()
// const fromObject = new URL('https://www.example.com/some/base');
// const toObject = new URL('/some/relative/path', fromObject);
// const resolvedUrlObject = url.resolveObject(fromObject, toObject);
// console.log('Resolved URL Object:', resolvedUrlObject);

// // Example usage of url.URL class
// const myUrl = new url.URL('https://www.example.com/some/path?param1=value1&param2=value2');
// console.log('URL Object:', myUrl);

const url = require('url');

// Example usage of URL properties
const myUrl = new url.URL('https://www.example.com:3000/some/path?param1=value1&param2=value2#ajdhghyeuywueiuriowouuqp');

console.log('Protocol:', myUrl.protocol);
console.log('Username:', myUrl.username);
console.log('Password:', myUrl.password);
console.log('Host:', myUrl.host);
console.log('Hostname:', myUrl.hostname);
console.log('Port:', myUrl.port);
console.log('Pathname:', myUrl.pathname);
console.log('Search:', myUrl.search);
console.log('Hash:', myUrl.hash);
console.log('Origin:', myUrl.origin);
console.log('Href:', myUrl.href);

// // Example usage of URL.searchParams
// console.log('Search Params:', myUrl.searchParams);
// console.log('Value of param1:', myUrl.searchParams.get('param1'));
// myUrl.searchParams.set('param3', 'value3');
// console.log('Updated Search Params:', myUrl.searchParams);

// // Example usage of URL methods
// console.log('Serialized URL:', myUrl.toString());
// console.log('JSON representation of URL:', myUrl.toJSON());
