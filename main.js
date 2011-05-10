var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World,\nthis is test 03.\ntest----!\n');
}).listen(process.env.C9_PORT, "0.0.0.0");

console.log('Server running at http://cloud9-test03.akifumi3_1.c9.io');


