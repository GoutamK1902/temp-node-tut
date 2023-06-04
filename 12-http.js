const http = require("http");
const { send } = require("process");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to HOMEPAGE");
  }
  if (req.url === "/about") {
    res.end("About");
  } else {
    res.end(`<h1> Page doesn't exist</h1>
    <a href="/">Home-Page</a>`);
  }
});

server.listen(5000);
