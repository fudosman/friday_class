// /*
// Also, remember to refer to the official Node.js documentation for the most up-to-date and accurate information on using the EventEmitter class and its methods.
// */


// // on(eventName, listener): Adds a listener function for a specific event.
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // Add a listener for the 'myEvent' event
// emitter.on('myEvent', (arg1, arg2) => {
//   console.log('Event emitted:', arg1, arg2);
// });

// // Emit the 'myEvent' event
// emitter.emit('myEvent', 'arg1Value', 'arg2Value');



// //emit(eventName, [...args]): Emits an event with a given name and optional arguments.
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // Add a listener for the 'myEvent' event
// emitter.on('myEvent', (arg1, arg2) => {
//   console.log('Event emitted:', arg1, arg2);
// });

// // Emit the 'myEvent' event with arguments
// emitter.emit('myEvent', 'arg1Value', 'arg2Value');


// // once(eventName, listener): Adds a one-time listener function that is automatically removed after it is called.

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // Add a one-time listener for the 'myEvent' event
// emitter.once('myEvent', () => {
//   console.log('This listener will be called only once.');
// });

// // Emit the 'myEvent' event
// emitter.emit('myEvent');



// // removeListener(eventName, listener): Removes a listener function for a specific event.
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // Listener function
// const myListener = () => {
//   console.log('This is my event listener.');
// };

// // Add a listener for the 'myEvent' event
// emitter.on('myEvent', myListener);

// // Remove the listener for the 'myEvent' event
// emitter.removeListener('myEvent', myListener);

// // Emit the 'myEvent' event
// emitter.emit('myEvent');



// // removeAllListeners([eventName]): Removes all listeners for a specific event or for all events.
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // Add listeners for the 'myEvent' event
// emitter.on('myEvent', () => {
//   console.log('This is listener 1.');
// });

// emitter.on('myEvent', () => {
//   console.log('This is listener 2.');
// });

// // Remove all listeners for the 'myEvent' event
// emitter.removeAllListeners('myEvent');

// // Emit the 'myEvent' event
// emitter.emit('myEvent');



