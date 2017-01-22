var express = require('express');
var app = express();

app.get('/search', function(req, res) {
  var data = JSON.stringify(req.query);
  res.send(data);
});

app.listen(process.argv[2] || 8080);

// SOLUTION
// var express = require('express')
// var app = express()
// 
// app.get('/search', function(req, res){
//   var query = req.query
//   res.send(query)
// })
// 
// app.listen(process.argv[2])