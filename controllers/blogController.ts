import { Response, Request } from "express";
const blogService = require("./../services/blogService");
const blogServiceInstance = new blogService();
exports.getAllBlogs = async (req: Request, res: Response) => {
  const blogs = await blogServiceInstance.getAllBlogs(req.body);
  res.status(200).send(blogs);
};
exports.getBlog = async (req: Request, res: Response) => {
  const blog = await blogServiceInstance.getBlogById(req.params.id);
  res.status(200).send(blog);
};

exports.createBlog = async (req: Request, res: Response) => {
  const newBlog = await blogServiceInstance.createBlog(req.body);
  res.status(200).send(newBlog);
};
exports.updateBlog = async (req: Request, res: Response) => {
  const blog = await blogServiceInstance.updateBlog(req.params.id, req.body);
  res.status(200).send(blog);
};
exports.deleteBlog = async (req: Request, res: Response) => {
  const result = await blogServiceInstance.deleteBlog(req.params.id);
  res.status(204).send(result);
};
