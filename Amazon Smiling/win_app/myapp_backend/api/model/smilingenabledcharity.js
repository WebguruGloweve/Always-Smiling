var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/smiling_database",  { useNewUrlParser: true });

const { Schema } = mongoose;

//Define a schema
// var Schema = mongooseClient.Schema;

var smilingenabledcharitysSchema = new Schema({
  EIN: String,
  charityName:String,
  charityAbout:String,
  chatrityLogo:String,
  chatrityIconLogo:String,
  chatrityContactEmail:String,
  chatrityContactName:String,
  chatrityEngagementDate:String,
  languague:String
});

var smilingenabledcharityModel = mongoose.model('smilingenabledcharity', smilingenabledcharitysSchema);
module.exports =  smilingenabledcharityModel;