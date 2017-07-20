var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3000;

var app = express();


//compare to just app.use(express.static("public"));... which is better?
// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.urlencoded({ extended: false }));


// Dependencies

var logger = require("morgan");
var mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Bring in our Models
var Board = require("./models/board.js");
var Group = require("./models/group.js");
var Links = require("./models/links.js");
var User = require("./models/user.js");


// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static dir
app.use(express.static("public"));


// Database configuration with mongoose
//what url to put for mongoose connection? heroku url? certainly not localhost?
mongoose.connect("mongodb://localhost/aggregateDB");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


//maybe we need to create all our tables in the db ahead of time?? i don't know??
// // We'll create a new Library by using the Library model as a class
// // The "unique" rule in the Library model's schema will prevent duplicate libraries from being added to the server
// var exampleLibrary = new Library({
//   name: "Campus Library"
// });
// // Using the save method in mongoose, we create our example library in the db
// exampleLibrary.save(function(error, doc) {
//   // Log any errors
//   if (error) {
//     console.log(error);
//   }
//   // Or log the doc
//   else {
//     console.log(doc);
//   }
// });



// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

// Can we do this?
// routes.append("./controllers/dogsController.js")\
// or this
// var routers = require(["list", "of", "routes"])
// or this
// routes.post("/", function(req, res) { catsFunction1() });
// routes.post("/register", function(req, res) { catsRegister() } );
// routes.post("/", function(req, res) {


app.use("/", routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

