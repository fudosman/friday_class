// Example of callback hell with 5 depths

// Function 1
function fetchUserData(userId, callback) {
  setTimeout(() => {
    console.log('Fetching user data...');
    const userData = { id: userId, name: 'John' };
    callback(null, userData);
  }, 1000);
}

// Function 2
function fetchPosts(userId, callback) {
  setTimeout(() => {
    console.log('Fetching posts...');
    const postsData = ['Post 1', 'Post 2', 'Post 3'];
    callback(null, postsData);
  }, 1000);
}

// Function 3
function fetchComments(postId, callback) {
  setTimeout(() => {
    console.log('Fetching comments...');
    const commentsData = ['Comment 1', 'Comment 2', 'Comment 3'];
    callback(null, commentsData);
  }, 1000);
}

// Function 4
function fetchLikes(postId, callback) {
  setTimeout(() => {
    console.log('Fetching likes...');
    const likesData = ['Like 1', 'Like 2', 'Like 3'];
    callback(null, likesData);
  }, 1000);
}

// Function 5
function displayData(userData, postsData, commentsData, likesData, callback) {
  setTimeout(() => {
    console.log('Displaying data...');
    console.log('User data:', userData);
    console.log('Posts data:', postsData);
    console.log('Comments data:', commentsData);
    console.log('Likes data:', likesData);
    callback(null);
  }, 1000);
}

// Call the functions in nested callbacks
fetchUserData(1, (error, userData) => {
  if (error) {
    console.error(error);
  } else {
    fetchPosts(userData.id, (error, postsData) => {
      if (error) {
        console.error(error);
      } else {
        fetchComments(postsData[0], (error, commentsData) => {
          if (error) {
            console.error(error);
          } else {
            fetchLikes(postsData[1], (error, likesData) => {
              if (error) {
                console.error(error);
              } else {
                displayData(userData, postsData, commentsData, likesData, (error) => {
                  if (error) {
                    console.error(error);
                  } else {
                    console.log('Data displayed successfully.');
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

