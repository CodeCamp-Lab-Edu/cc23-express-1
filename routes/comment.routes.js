import express from "express";
import {
  getCommentByBlogId,
  getCommentById,
  AddComment,
} from "../controllers/comment.controller.js";

const router = express.Router();
//:  /blogs/:blogId/comments

router.get("/", getCommentByBlogId);
router.get("/:commentId", getCommentById);

//post comment
router.post("/", AddComment);

export default router;
