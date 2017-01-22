var express = require('express');
var fs      = require('fs');
var path    = require('path');

var app = express();

app.get('/books', function(req, res) {
  var booksPath = process.argv[3] || path.join(__dirname, 'books.txt');

  fs.readFile(booksPath, 'utf8', function(err, data){
    if (err) return res.sendStatus(500);

    try {
      res.json(JSON.parse(data));
    } catch (e) {
      res.sendStatus(500);
    }

  });
});

app.listen(process.argv[2] || 8000);

// SOLUTION
// var express = require('express')
// var app = express()
// var fs = require('fs')
// 
// app.get('/books', function(req, res){
//   var filename = process.argv[3]
//   fs.readFile(filename, function(e, data) {
//     if (e) return res.sendStatus(500)
//     try {
//       books = JSON.parse(data)
//     } catch (e) {
//       res.sendStatus(500)
//     }
//     res.json(books)
//   })
// })
// 
// app.listen(process.argv[2])