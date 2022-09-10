const Blog = require("./../models/blogModel");
import { Request } from "express";
class BlogService {
  async getBlogs(query: Request["body"]) {
    try {
      // const queryObj = { ...query };
      // const excludedFields = ["page", "sort", "limit", "fields"];
      // excludedFields.forEach((x) => delete queryObj[x]);
      const blogs = await Blog.find();
      return {
        success: true,
        blogs,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  }
  async getBlogById(id: Number) {
    try {
      const blog = await Blog.findById(id);
      return {
        success: true,
        blog,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  }
  async createBlog(postToCreate: Request["body"]) {
    const newBlog = new Blog(postToCreate);
    try {
      const result = await this.save(newBlog);
      return {
        success: true,
        body: result,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  }
  async updateBlog(id: Number, body: Request["body"]) {
    try {
      const blog = await Blog.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      return {
        success: true,
        blog,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  }
  async deleteBlog(id: Number) {
    try {
      const result = await Blog.findByIdAndDelete(id);
      return {
        success: true,
        result,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  }
  async save(blog: typeof Blog) {
    try {
      await blog.save();
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  }
}

module.exports = BlogService;
