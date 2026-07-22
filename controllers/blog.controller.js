import { blogs } from "../data/blogs.js";

export function getBlogs(req, res) {
  res.json({ message: "Blogs received successfully", blogs });
}

export function getBlogById(req, res) {
  //   const id = Number(req.params.blogId);

  //   const blog = blogs.find((b) => b.id === id);
  res.json(req.blog);
}

export function getCommentByBlogId(req, res) {
  //   const id = Number(req.params.blogId);

  //   const blog = blogs.find((b) => b.id === id);
  res.json(req.blog.comments);
}

export function getCommentById(req, res) {
  const comments = req.blog.comments;
  const commentId = Number(req.params.commentId);

  const comment = comments.find((c) => c.id === commentId);

  res.json(comment);
}
