var express = require('express');
var app = express();
var http = require('http').createServer(app);
var routes = require('./routes');
var publicDir = require('path').join(__dirname,'/public');

app.use(express.static(publicDir));
app.use('/', routes);

http.listen(3000, function(){
  console.log('listening on *:3000');
});