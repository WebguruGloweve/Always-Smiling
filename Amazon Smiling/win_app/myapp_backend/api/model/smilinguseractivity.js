var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/smiling_database", { useNewUrlParser: true });

const { Schema } = mongoose;

//Define a schema
// var Schema = mongooseClient.Schema;

var smilingActivitiesSchema = new Schema({
  UUID:String,
  EIN:String,
  userNameFirst:String,
  userNameLast:String,
  userEmail:String,
  browser:String,
  platform:String,
  language:String,
  timeCreated:String,
  entryType:String
});

var smilinguseractivityModel = mongoose.model('smilinguseractivity', smilingActivitiesSchema);
module.exports =  smilinguseractivityModel;