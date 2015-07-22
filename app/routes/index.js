'use strict'; 

var ClickHandler = require('/controllers/clickHandler.server.js');

var path = process.cwd();

module.exports = function (app, db) {

  var clickHandler = new ClickHandler(db);


  app.route('/')
    .get(function(req,res){
      res.sendFile(path + '/public/index.html');
    });


  app.route('/api/clicks')
      .get(clickHandler.getClicks);  
};
