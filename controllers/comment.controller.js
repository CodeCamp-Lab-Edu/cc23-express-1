import { blogs } from "../data/blogs.js";

export function getCommentByBlogId(req, res) {
  res.json(req.blog.comments);
}

export function getCommentById(req, res) {
  const comments = req.blog.comments;
  const commentId = Number(req.params.commentId);

  const comment = comments.find((c) => c.id === commentId);

  res.json(comment);
}

export function AddComment(req, res) {
    const comments = req.blog.comments
    const { author, message } = req.body

    const newComment = {
        id: comments.length ? comments[comments.length - 1].id + 1: 1,
        author,
        message
    }

    comments.push(newComment)

    res.json({
        message: "Comment added",
        comment: newComment
    })
}