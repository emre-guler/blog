import { url } from "inspector";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  age:Number,
  bio:String,
  created_ad:Date,
  email_address:String,
  fullname:String,
  is_active:Boolean,
  last_login_date:Date,
  mobile_phone_number:Number,
  password:String,
  photo_url:url,
  username:String,
  work_titles:Array,
  social_media_urls:Object
});

const User=mongoose.model('User',userSchema);

module.exports=User;