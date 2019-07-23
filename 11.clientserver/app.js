//client => req(uest+request headers)  =>  server
//       <= res(ponse+response headers) <=
// For Real Time Communication : WebSocket
//TCP - server to client using packet & Port


//creating server
const http = require('http');

var server = http.createServer((req,res)=>{
  console.log('request to '+req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain' });
  res.end('Hey res end');

});

server.listen(3000);

console.log('listening on port 3000');
