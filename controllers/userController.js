// Import the model to use its database functions.
// var Board = require("../models/board.js");
// var Group = require("../models/group.js");
// var Links = require("../models/links.js");
var User = require("../models/user.js");

var makeDate = require("../scripts/date");

module.exports = {


    save: function(data, cb) { //data is the query


        //save a new user with the user model, saving the apropos info
        // var newUser = {
        //   _headlineId: data._id,
        //   date: makeDate(),
        //   noteText: data.noteText
        // };

        var newUser = {
            username: data.username,
            userCreated: makeDate(),
            password: data.password,
            email: data.email,
            _id: data._id,
            groupIDs: []

        };

        // Save the newUser we made to mongoDB with mongoose's save function
        User.create(newUser, function(err, doc) {
            // Log any errors
            if (err) {
                console.log(err);
            }
            // Or just log the doc we saved
            else {
                console.log(doc);
                // Place the log back in this callback function
                // so it can be used with other functions asynchronously
                cb(doc);
            }
        });

    },

    delete: function(data, cb) {
    // Remove a User using mongoose and our note Model,
    // searching by the user's id
    User.remove({
      _id: data._id
    }, cb);
  },

    get: function(query, cb) {
    // get all the users
    // and sort starting from most recent (sorted by id num)
    //do we need the query parameter?
    User.find()
      .sort({
        _id: -1
      })
      // Execute this query
      .exec(function(err, doc) {
        // Once finished, pass the list into the callback function
        cb(doc);
      });
  }


};