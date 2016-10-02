var express = require("express");
var mongoose = require('mongoose');
var app = express();
var multipart = require('connect-multiparty');
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');
var dashboardController = require('./server/controllers/dashboard-controller.js');
var bodyParser = require('body-parser');
var multipartMiddleware = multipart();



var mongodbUri = 'mongodb://andriipi:andriipi1@ds012345-a0.mlab.com:56789,ds012345-a1.mlab.com:56790/admin?replicaSet=rs-ds01234';


mongoose.connect(mongodbUri);

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(multipartMiddleware);



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



app.listen("3000", function(){
	console.log("Server is running on a port 3000");
});

