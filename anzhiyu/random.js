var posts=["2024/07/20/嗨害嗨/","2024/07/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };