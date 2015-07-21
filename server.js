'use strict';

var express = require('express'), 
  routes=require('./app/routes/index.js');

var app = express();

var path = process.cwd();

routes(app);

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
