// Example of setTimeout() to schedule a task after a delay
console.log('Start');
setTimeout(() => {
  console.log('Delayed task executed after 2 seconds');
}, 2000); // 2 seconds delay
console.log('End');

// Example of setInterval() to schedule a task at regular intervals
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval task executed ${count} times`);
  if (count === 5) {
    clearInterval(intervalId); // Cancel the execution after 5 times
    console.log('Interval task cancelled');
  }
}, 1000); // 1 second interval

// Example of clearTimeout() to cancel a scheduled task
const timeoutId = setTimeout(() => {
  console.log('This task will be cancelled before execution');
}, 3000); // 3 seconds delay

clearTimeout(timeoutId); // Cancel the execution of the above task

console.log('End');
