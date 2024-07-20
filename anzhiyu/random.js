var posts=["2024/07/19/hello-world/","2024/07/20/嗨害嗨/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };