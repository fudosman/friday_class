// Example of setTimeout() to schedule a task to execute after a certain amount of time
console.log('Start');
setTimeout(() => {
  console.log('Delayed task executed after 2 seconds');
}, 2000); // 2 seconds delay
console.log('End');

// Example of setInterval() to schedule a task to execute at regular intervals
console.log('Start');
setInterval(() => {
  console.log('Interval task executed every 1 second');
}, 1000); // 1 second interval
console.log('End');

// Example of using Promises to handle asynchronous operations, such as network requests
console.log('Start');
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
console.log('End');

// Example demonstrating how the event loop manages the execution of tasks
console.log('Start');

setTimeout(() => {
  console.log('Delayed task executed after 1 second');
}, 1000); // 1 second delay

console.log('End');
