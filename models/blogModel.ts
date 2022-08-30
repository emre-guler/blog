const User = require("./../models/userModel");

const blogSchema = new mongoose.Schema(
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
      type: User.id,
      required: [true, "Must have a user id"],
    },
  },
  {
    autoCreate: true, // auto create collection
    autoIndex: true, // auto create indexes
  }
);

const blog = mongoose.model("Blog", blogSchema);
module.exports = blog;
