const fs = require('fs');

//sync version : mkdirSync
//fs.mkdirSync('stuff');

//async version : mkdir
// fs.mkdir('stuffAsync', function() {
//   fs.readFile('../readingAndWriting/read.txt','utf8',(err, data) => {
//     fs.writeFileSync('./stuffAsync/write.txt',data);
//     console.log('reading Success');
//   })
// })

//delete folder

fs.unlink('./stuffAsync/write.txt',()=>{
  fs.rmdir('stuffAsync');
})
