const http = require('http');
const fs = require('fs');
var server = http.createServer((req,res)=>{

  console.log('request to '+req.url);
  //for html
  //res.writeHead(200, {'Content-Type' : 'text/html' });
  //for Json
  res.writeHead(200, {'Content-Type' : 'application/json' });
  //var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  //myReadStream.pipe(res);
  var myObj = {
    name : 'JaeHwan',
    job : 'artcenter staff',
    age : 27
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000);

console.log('listening on port 3000');
