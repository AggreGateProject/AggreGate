// Dependency
var mongoose = require("mongoose");

// Create the Schema class
//Schema is a thing built into mongoose
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var linksSchema = new Schema({
  
 
  // This will make a userCreated entry in our doc, by default the current time string.
  linkCreated: {
    type: Date,
    default: Date.now
  },
  _id:  { type: Schema.Types.ObjectId },
  description: {type: String},
  rating: {type: Number},
  url: {type: String, required:true},
  addedBy: {type: Schema.Types.ObjectId, ref: "User"},
  linkType: {type: String},
  whenWritten: {type:String, required:true},
   title: {
    type: String,
    trim: true,
    required: "Title is Required"
  }




});

// Create the "User" model with our UserSchema schema
var Links = mongoose.model("Links", linksSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Links;

// ID
//   Added-by (User ID)
//   Group ID
// Title
//   Type 
//   Url
//   Date-retrieved
//   Date-created
//   Thumbnail image
//   Sub-text (tweet text OR youtube description OR news article body text)
//   “Fake news”/credibility rating (possibly a boolean “is it fake news or not”, possibly based on a ratio of like/dislike from votes of people in the group) (nice to have, not necessary)
