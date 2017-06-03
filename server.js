var express = require('express');
const path = require('path');

//Create App
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.listen(PORT,function(){
  console.log('Express server is up on port 3000.')
});
