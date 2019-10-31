var { Mongoose } = require('mongoose');
var mongoose = new Mongoose();

mongoose.connect("mongodb://localhost:27017/master_charity",  { useNewUrlParser: true });

const { Schema } = mongoose;

//Define a schema
// var Schema = mongooseClient.Schema;

var beneficiarySchema = new Schema({
  EIN:String,
  Name:String,
  City:String,
  State:String,
  Code:String
});

var beneficiaryModel = mongoose.model('beneficiary', beneficiarySchema);
module.exports =  beneficiaryModel;