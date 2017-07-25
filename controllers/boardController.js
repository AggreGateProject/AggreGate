var Board = require("../models/board.js");

var makeDate = require("../scripts/date");

module.exports = {

save: function(data, cb) { 

//save a new board with the board model, saving the apropos info
       

        var newBoard = {
            boardname: data.boardname,
            boardCreated: makeDate(),
            _id: data._id,
            groupsWithAccess: [],
            owner:data.owner,
            dataSourceIDs: []

        };

        // Save the newUser we made to mongoDB with mongoose's save function
        Board.create(newBoard, function(err, doc) {
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

// Remove a Board using mongoose and our board Model,
    // searching by the board's id
    Board.remove({
      _id: data._id
    }, cb);


 },
get: function(data, cb) {

// get all the boards
    // and sort starting from most recent (sorted by id num)
    //do we need the query parameter?
    Board.find({})
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