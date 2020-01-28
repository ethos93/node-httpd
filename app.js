const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This hostname is ' + os.hostname() + '\n');
});

server.listen(8080, '0.0.0.0', () => {
});
