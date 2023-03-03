function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date();
      console.log(`User's last activity time: ${lastActivityTime}`);
      resolve(lastActivityTime);
    }, 1000);
  });
}


const posts = [];

function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(post);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    const lastPost = posts.pop();
    resolve(lastPost);
  });
}

Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
  .then((values) => {
    console.log(`All promises resolved. Posts: ${JSON.stringify(posts)}, Last Activity Time: ${values[1]}`);
    return deleteLastPost();
  })
  .then((lastPost) => {
    console.log(`Deleted last post: ${JSON.stringify(lastPost)}. New posts: ${JSON.stringify(posts)}`);
  })
  .catch((error) => {
    console.error(error);
  });
