var express = require('express');

var port = process.argv[2];
var app = express();

app.param('id', function(req, res, next, id) {
  req.id = id;
  next();
});

app.put('/message/:id', function(req, res){
  var hash = require('crypto')
              .createHash('sha1')
              .update(new Date().toDateString() + req.id)
              .digest('hex');
  res.end(hash);
});

app.listen(port || 8080);

// SOLUTION
// var express = require('express')
// var app = express()
// 
// app.put('/message/:id', function(req, res){
//   var id = req.params.id
//   var str = require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')
//   res.send(str)
// })
// 
// app.listen(process.argv[2])