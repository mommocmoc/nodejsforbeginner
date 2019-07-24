const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt')


// myReadStream.on('data', (chunk) => {
//   console.log('new chunk received');
//   myWriteStream.write("something");
// })

//Pipe는 자동으로 데이터 이벤트 발생 감지 없이 알아서 데이터 씀
myReadStream.pipe(myWriteStream);
