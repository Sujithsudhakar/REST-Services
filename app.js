var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 

app.use(bodyParser.json());  

app.use(require('./controllers'));

app.listen('4444', function(){
	console.log("The Doctor's server is running....");
});