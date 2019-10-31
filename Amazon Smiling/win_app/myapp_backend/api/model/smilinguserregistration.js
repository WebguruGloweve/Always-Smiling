var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/smiling_database", { useNewUrlParser: true });

const { Schema } = mongoose;

//Define a schema
// var Schema = mongooseClient.Schema;

var smilingUserRegistrationsSchema = new Schema({
  UUIDs:String,
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

var smilingUserRegistrationModel = mongoose.model('smilinguserregistration', smilingUserRegistrationsSchema);
module.exports =  smilingUserRegistrationModel;