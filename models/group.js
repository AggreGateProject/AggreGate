// Dependency
var mongoose = require("mongoose");

// Create the Schema class
//Schema is a thing built into mongoose
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var groupSchema = new Schema({
  // username is a string. We will trim any trailing whitespace. It's also required
  groupname: {
    type: String,
    trim: true,
    required: "Group name is Required"
  },
 
  // This will make a userCreated entry in our doc, by default the current time string.
  groupCreated: {
    type: Date,
    default: Date.now
  },
  _id:  { type: Schema.Types.ObjectId },

  userIDs: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Group model
    ref: "User"
  
  }]
});

// Create the "User" model with our UserSchema schema
var Group = mongoose.model("Group", groupSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Group;