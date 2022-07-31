import { url } from "inspector";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  age: String,
  bio: String,
  created_ad: Date,
  email_address: String,
  fullname: String,
  is_active: Boolean,
  last_login_date: Date,
  mobile_phone_number: String,
  password: String,
  photo_url: String,
  username: String,
  work_titles: Array,
  social_media_urls: String,
});

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
