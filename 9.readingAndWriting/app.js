const fs = require('fs');

// var txt = fs.readFileSync('read.txt', 'utf8');
// console.log(txt);
// fs.writeFileSync('write.txt', txt);

fs.readFile('read.txt', 'utf8', function(err, data) {
  fs.writeFile('write.txt', data,'utf8',(err) => {
    // if(err) throw err;
    console.log('file copied!');
  });
});
