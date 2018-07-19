const token = "aec214042811cf7085d0961cc3382c3bebb90514";
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
