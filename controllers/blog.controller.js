import { blogs } from "../data/blogs.js";

export function getBlogs(req, res) {
  res.json({ message: "Blogs received successfully", blogs });
}

export function getBlogById(req, res) {
  res.json(req.blog);
}

