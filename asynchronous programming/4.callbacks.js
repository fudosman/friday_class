// Example of using a callback for asynchronous task

// A function that simulates an asynchronous task
function getData(callback) {
  setTimeout(() => {
    const data = 'This is the data';
    // Simulating an error condition
    const error = new Error("this is an error"); // Set to non-null value to simulate an error

    // Check for error condition
    if (error) {
      // If error, invoke the callback with error as the first argument
      console.log({ error });
      return "plz check your code and its configuration."
    } else {
      // If no error, invoke the callback with null as the first argument
      // and the data as the second argument
      callback(null, data);
    }
  }, 2000); // 2 seconds delay
}

// Callback function to handle the data or error
function handleData(error, data) {
  if (error) {
    console.error(error); // Log the error
  } else {
    console.log(data); // Log the data
  }
}

// Call the function with the callback
getData(handleData);

