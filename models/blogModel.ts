import { Schema } from "mongoose";
const mongoose = require("mongoose");
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Must have a title"],
    },
    blog_post: {
      type: String,
      required: [true, "Must have a blog post"],
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    autoCreate: true, // auto create collection
    autoIndex: true, // auto create indexes
  }
);

const blog = mongoose.model("Blog", blogSchema);
module.exports = blog;
