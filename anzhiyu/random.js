var posts=["2024/07/19/hello-world/","2025/01/13/6DHCP中继实验/","2024/07/21/山海随想/","2024/07/28/smb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };