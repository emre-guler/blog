import { Schema } from "mongoose";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Must have a username"],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, "Must have a first name"],
    },
    lastName: {
      type: String,
      required: [true, "Must have a last name"],
    },
    age: {
      type: String,
    },
    email_address: {
      type: String,
      required: [true, "Must have a email address"],
      unique: true,
    },
    phone_number: Number,
    password: String,
    photo_url: String,
    is_active: {
      type: Boolean,
      default: true,
    },
    created_ad: {
      type: Date,
      default: Date.now(),
    },
    last_login_date: {
      type: Date,
      default: Date.now(),
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  {
    autoCreate: true, // auto create collection
    autoIndex: true, // auto create indexes
  }
);
const User = mongoose.model("Users", userSchema);
module.exports = User;
