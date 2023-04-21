// Example using async/await

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

// Main function using async/await
async function fetchData() {
  try {
    const userData = await fetchUserData(1);
    const postsData = await fetchPosts(userData.id);
    const commentsData = await fetchComments(postsData[0]);
    const likesData = await fetchLikes(postsData[1]);
    await displayData(userData, postsData, commentsData, likesData);
    console.log('Data displayed successfully.');
  } catch (error) {
    console.error(error);
  }
}

// Call the main function
fetchData();
