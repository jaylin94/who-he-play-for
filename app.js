//Include all required middleware
const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

const apiKey = "0eea66e3fafdde4ed325b128b5760462";
const apiID = "1fedc867";

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

app.get("/search", function(req, res) {
  let playerName = req.query.playerName;
  request(`https://www.balldontlie.io/api/v1/players?&per_page=100&search=${playerName}`, function(err, response, body) {
    if(!err && response.statusCode == 200) {
      let data = JSON.parse(body);
      console.log(data);
      res.render("search", {data: data});
    }
    else {
      console.log(err);
      res.send("Oops! Something has gone wrong. Please try again later.");
    }
  });
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
