var posts=["2024/07/28/smb/","2024/07/21/山海随想/","2024/07/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };