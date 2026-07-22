import { blogs } from "../data/blogs.js";

export function getBlogs(req, res) {
  res.json({ message: "Blogs received successfully", blogs });
}

export function getBlogById(req, res) {
  res.json(req.blog);
}

export function getBlogSummary(req, res) {
  const summary = blogs.map((b) => ({
    id: b.id,
    title: b.title,
    comments: b.comments.length
  }));

  res.json(summary);
}
