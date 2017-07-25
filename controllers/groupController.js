var Group = require("../models/group.js");

var makeDate = require("../scripts/date");

module.exports = {




save: function(data, cb) { 

 //save a new user with the user model, saving the apropos info
       

        var newGroup = {
            groupname: data.groupname,
            groupCreated: makeDate(),
            _id: data._id,
            usernamesString: data.usernamesString,
            userIDs: []

        };

        // Save the newUser we made to mongoDB with mongoose's save function
        Group.create(newGroup, function(err, doc) {
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

delete:function(data, cb) { 

// Remove a User using mongoose and our note Model,
    // searching by the user's id
    Group.remove({
      _id: data._id
    }, cb);

},

updateAddUserToGroup: function(query, cb) { 
 // Update the group with the group id supplied
    // set it to be equal to any new values we pass in on query
    Group.update({ groupname: query.groupname }, {
      {$push: {"userIDs": query._id }
    }, {}, cb);
  }

},

updateDeleteUserFromGroup: function(data, cb) { },

get: function(data, cb) { 

// get all the users
    // and sort starting from most recent (sorted by id num)
    //do we need the query parameter?
    Group.find({})
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