var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/smiling_database",  { useNewUrlParser: true });

const { Schema } = mongoose;

//Define a schema
// var Schema = mongooseClient.Schema;

var smilingapptextsSchema = new Schema({
  language:String,
  Tab1:String,
  Tab2:String,
  Tab3:String,
  Tab4:String,
  HeadingText1:String,
  HeadingText2:String,
  HeadingText3_1:String,
  HeadingText3_2:String,
  HeadingText3_3:String,
  HeadingText3_4:String,
  HeadingText3_5:String,
  HeadingText4_1:String,
  HeadingText4_2:String,
  HeadingText4_3:String,
  active_tab:String,
  HtmlText1:String,
  HtmlText2:String,
  HtmlText3_1:String,
  HtmlText3_2:String,
  HtmlText3_3:String,
  HtmlText3_4:String,
  HtmlText3_5:String,
  HtmlText4_1:String,
  HtmlText4_2:String,
  HtmlText4_3:String,
  browser:String,
  platform:String,
  Button1:String,
  Button2:String,
  Button3:String,
  Button4:String,
  Label1:String,
  Label2:String,
  Label3:String,
  Label4:String,
  Label5:String,
  Label6:String,
  Label7:String,
  
});

var smilingapptextModel = mongoose.model('smilingapptext', smilingapptextsSchema);
module.exports =  smilingapptextModel;