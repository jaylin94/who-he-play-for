//Include all required middleware
const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

//Set static file folder, body-parser settings for url and json
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Set view engine to ejs
app.set("view engine", "ejs");

//Set obj to empty object
var obj = {};

//GET request to change header, display query parameters and values
app.get("/", function(req, res) {
  res.render("index");
});


//Render 404 page if page is not found
app.use(function(req, res) {
  res.status(404);
  res.render("404");
});

//Render 500 error message if server error
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

//Listen for set port
app.listen(9392, process.env.IP);
