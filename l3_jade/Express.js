var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3] || path.join(__dirname, 'templates'))

app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2] || 8080);

// SOLUTION
// var express = require('express')
// var app = express()
// app.set('view engine', 'jade')
// app.set('views', process.argv[3])
// app.get('/home', function(req, res) {
//   res.render('index', {date: new Date().toDateString()})
// })
// app.listen(process.argv[2])