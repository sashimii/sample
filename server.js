// Server.js File

var express = require("express");
var https   = require("https");
var bodyParser = require('body-parser');
var qs = require('querystring');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 2222;

app.use('/', express.static('public'));

app.listen(port);
console.log("Server running at port " + port);
