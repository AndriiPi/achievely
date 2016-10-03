var express = require("express");
var mongoose = require('mongoose');
var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var dashboardController = require('./server/controllers/dashboard-controller.js');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");




// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect('mongodb://<heroku_38xqxdmg>:<andriipi>@ds035016.mlab.com:35016/heroku_38xqxdmg', function (err, database) {
  if (err) {
	console.log(err);
	process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
  });
});


app.use(bodyParser.json());
app.use(express.static(__dirname));




app.all("/", function(req,res){
	res.sendfile("index.html");
});
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/node_modules', express.static(__dirname + "/uploads"));



//USER AUTHENTICATION
app.post("/api/user/signup", authenticationController.signup);
app.post("/api/user/login", authenticationController.login);



//Goal
app.post('/api/goal/set',  dashboardController.setGoal);
app.post('/api/goal/get',dashboardController.getGoal);
app.post('/api/goal/delete', dashboardController.deleteGoal);
app.post('/api/goal/achieve', dashboardController.achieveGoal);
app.post('/api/goal/edit', dashboardController.editGoal);


module.exports = db;
