// Dependency
var mongoose = require("mongoose");

// Create the Schema class
//Schema is a thing built into mongoose
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var boardSchema = new Schema({
  // username is a string. We will trim any trailing whitespace. It's also required
  boardname: {
    type: String,
    trim: true,
    required: "Board name is Required"
  },
 
  // This will make a userCreated entry in our doc, by default the current time string.
  boardCreated: {
    type: Date,
    default: Date.now
  },
  _id:  { type: Schema.Types.ObjectId },

  groupsWithAccess: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Group model
    ref: "Group"
  
  }],

  owner: {
    type: Schema.Types.ObjectId,

    ref: "User"

  },

  dataSourceIDs: [{
    type: Schema.Types.ObjectId,

    ref: "Links"

  }]
});

// Create the "User" model with our UserSchema schema
var Board = mongoose.model("Board", boardSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Board;