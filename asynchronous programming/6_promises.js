// Example using Promises

// Function 1
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching user data...');
      const userData = { id: userId, name: 'John' };
      resolve(userData);
    }, 1000);
  });
}

// Function 2
function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching posts...');
      const postsData = ['Post 1', 'Post 2', 'Post 3'];
      resolve(postsData);
    }, 1000);
  });
}

// Function 3
function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching comments...');
      const commentsData = ['Comment 1', 'Comment 2', 'Comment 3'];
      resolve(commentsData);
    }, 1000);
  });
}

// Function 4
function fetchLikes(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching likes...');
      const likesData = ['Like 1', 'Like 2', 'Like 3'];
      resolve(likesData);
    }, 1000);
  });
}

// Function 5
function displayData(userData, postsData, commentsData, likesData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Displaying data...');
      console.log('User data:', userData);
      console.log('Posts data:', postsData);
      console.log('Comments data:', commentsData);
      console.log('Likes data:', likesData);
      resolve();
    }, 1000);
  });
}

// Call the functions using Promises
fetchUserData(1)
  .then(userData => {
    return fetchPosts(userData.id);
  })
  .then(postsData => {
    return fetchComments(postsData[0]);
  })
  .then(commentsData => {
    return fetchLikes(postsData[1]);
  })
  .then(likesData => {
    return displayData(userData, postsData, commentsData, likesData);
  })
  .then(() => {
    console.log('Data displayed successfully.');
  })
  .catch(error => {
    console.error(error);
  });



// states
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching user data...');
      const userData = { id: userId, name: 'John' };
      resolve(userData);
    }, 1000);
  });
}

const userDataPromise = fetchUserData(1);

console.log(userDataPromise); // Promise { <pending> }

userDataPromise.then(userData => {
  console.log(userData); // { id: 1, name: 'John' }
});


// composition
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching user data...');
      const userData = { id: userId, name: 'John' };
      resolve(userData);
    }, 1000);
  });
}

function fetchPosts(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching posts...');
      const postsData = ['Post 1', 'Post 2', 'Post 3'];
      resolve(postsData);
    }, 1000);
  });
}

function fetchComments(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching comments...');
      const commentsData = ['Comment 1', 'Comment 2', 'Comment 3'];
      resolve(commentsData);
    }, 1000);
  });
}

const userDataPromise = fetchUserData(1);
const postsDataPromise = fetchPosts(userDataPromise);
const commentsDataPromise = fetchComments(userDataPromise);

Promise.all([postsDataPromise, commentsDataPromise])
  .then(([postsData, commentsData]) => {
    console.log('Posts data:', postsData);
    console.log('Comments data:', commentsData);
  })
  .catch(error => {
    console.error(error);
  });


// clean up
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching data...');
      const data = 'Some data';
      // Uncomment the line below to simulate an error
      // reject(new Error('Error fetching data'));
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('Cleanup: Closing resources...'); // Cleanup task
  });


// backwards compatibility
const fs = require('fs');
const util = require('util');

// Example with callback-based code
fs.readFile('file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Data:', data);
  }
});

// Example with Promises using util.promisify()
const readFile = util.promisify(fs.readFile);

readFile('file.txt', 'utf8')
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error(error);
  });



// 7. Error Handling:

// Promises provide a consistent and centralized way to handle errors in asynchronous code.Errors that occur in Promises can be caught using the `.catch()` method, allowing for proper error handling and propagation.Here's an example:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching data...');
      // Uncomment the line below to simulate an error
      // throw new Error('Error fetching data');
      const data = 'Some data';
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error); // Error handling
  });
