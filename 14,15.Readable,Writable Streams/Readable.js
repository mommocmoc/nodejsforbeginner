const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');

myReadStream.on('data', (chunk) => {
  console.log('new chunk received');
  console.log(chunk);
})
