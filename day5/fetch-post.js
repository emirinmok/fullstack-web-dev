const postId = 3;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(post => {
    console.log(`Post #${postId}`);
    console.log("Title:", post.title);
    console.log("Body:", post.body);
  })
  .catch(error => console.error("Error fetching post:", error));
