var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var Board = require("../models/board.js");
var Group = require("../models/group.js");
var Links = require("../models/links.js");
var User = require("../models/user.js");
























// Export routes for server.js to use.
module.exports = router;