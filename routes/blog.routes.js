import express from "express";
import {
  getBlogs,
  getBlogById,
  getCommentByBlogId,
  getCommentById,
} from "../controllers/blog.controller.js";
import { validateBlogExists } from "../middlewares/validateBlogExists.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:blogId", validateBlogExists, getBlogById);
router.get("/:blogId/comments", validateBlogExists, getCommentByBlogId);
router.get("/:blogId/comments/:commentId", validateBlogExists, getCommentById);

export default router;
