const express = require('express');

var app =express();

app.get('/',(req, res)=>{
  res.sendFile(__dirname +'/index.html');
})

app.get('/contact',(req, res)=>{
  res.sendFile(__dirname +'/contact.html');
})
// :something => req.params.somethin 으로 사용 가능
app.get('/profile/:id',(req, res)=>{
  res.send('You request profile #' + req.params.id);
})

app.listen(3000);
