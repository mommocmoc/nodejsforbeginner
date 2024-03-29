const http = require('http');
const fs = require('fs');

var server = http.createServer((req,res)=>{
  console.log('request' + req.url);
  if(req.url ==='/home'||req.url ==='/'){
    res.writeHead(200,{'Content-Type' : 'text/html'})
    fs.createReadStream(__dirname + '/index.html').pipe(res)
  }else if(req.url ==='/contact-us'){
    res.writeHead(200,{'Content-Type' : 'text/html'})
    fs.createReadStream(__dirname + '/contact.html').pipe(res)
  }else if(req.url === '/api/family'){
    var family = [{
      name : 'Jae',
      age : 29
    },{
      name : 'Jing',
      age : 28
    }]
    res.writeHead(200,{'Content-Type' : 'application/json'})
    res.end(JSON.stringify(family))
  }else{
    res.writeHead(404,{'Content-Type' : 'text/html'})
    fs.createReadStream(__dirname + '/404.html').pipe(res)
  }
})

server.listen(3000)
console.log('Server Started')
