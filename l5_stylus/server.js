let express = require('express');
let styl = require('stylus');
let path = require('path');

let port = process.argv[2] || 8080;
let directory = process.argv[3] || path.join(__dirname, 'styl');

let app = express();

app.use(styl.middleware(directory))

app.use(express.static(directory));


app.listen(port);

// SOLUTION
// var express = require('express')
// var app = express()

// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));


// app.listen(process.argv[2])