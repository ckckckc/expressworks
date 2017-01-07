let express = require('express');
let path    = require('path');
let app = express();
let publicPath = process.argv[3] || path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(process.argv[2] || 8080);


// SOLUTION
// var path = require('path')
// var express = require('express')
// var app = express()

// app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

// app.listen(process.argv[2])