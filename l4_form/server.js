let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
  var str = req.body.str;
  res.end(str.split('').reverse().join(''));
});

app.listen(process.argv[2] || 8080);

//SOLUTION
// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()

// app.use(bodyParser.urlencoded({extended: false}))

// app.post('/form', function(req, res) {
//   res.send(req.body.str.split('').reverse().join(''))
// })

// app.listen(process.argv[2])