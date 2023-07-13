const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

const server = http.createServer((req, res) => {
  let filePath = '';
  switch (req.url) {
    case '/':
      filePath = path.join(__dirname,'index.html');
      break;
    case '/about':
      filePath = path.join(__dirname,'about.html');
      break;
    case '/contact-me':
      filePath = path.join(__dirname,'contact-me.html');
      break;
    default:
      filePath = path.join(__dirname,'404.html');
      res.statusCode = 404; 
      break;
  }
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal Server Error');alsdkfjhalsdkfjhalsdkfjpppppp
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
