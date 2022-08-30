import { Response, Request } from "express";
const BlogService = require("./../services/blogService");

exports.getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogService.getAllBlogs(req.body);
    res.status(200).json({
      status: "success",
      result: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getBlog = async (req: Request, res: Response) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createBlog = async (req: Request, res: Response) => {
  try {
    const newBlog = await BlogService.createBlog(req.body);
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateBlog = async (req: Request, res: Response) => {
  try {
    const blog = await BlogService.updateBlog(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteBlog = async (req: Request, res: Response) => {
  try {
    await BlogService.deleteBlog(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
