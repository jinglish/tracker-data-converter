'use strict';

var parser = require('csv-parse');
var fs = require('fs');

var debug = false;
//CSV file name is passed as a command line argument
var file = process.argv[2];
fs.readFile(file, 'utf8', function (err, data) {
  
});
