// Example of setTimeout() to schedule a task after a delay
// console.log('Start');
// const myTask = () => {
//   setTimeout(() => {
//     console.log('Delayed task executed after 10 seconds');
//   }, 10000)
// };

// myTask();
// console.log('End');

// Example of setInterval() to schedule a task at regular intervals
// let count = 0;
// console.log('start');
// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Interval task executed ${count} times`);
//   if (count === 5) {
//     clearInterval(intervalId); // Cancel the execution after 5 times
//     console.log('Interval task cancelled');
//   }
// }, 2000); // 1 second interval

// console.log('end of the file');

// Example of clearTimeout() to cancel a scheduled task
console.time("time");
const timeoutId = setTimeout(() => {
  console.log('This task will be cancelled before execution');
}, 3000); // 3 seconds delay
console.timeEnd("time");

clearTimeout(timeoutId); // Cancel the execution of the above task

// console.log('End');
