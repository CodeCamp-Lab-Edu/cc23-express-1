import express from "express";
import {
  getBlogs,
  getBlogById
} from "../controllers/blog.controller.js";
import { validateBlogExists } from "../middlewares/validateBlogExists.js";
import commentRoutes from "./comment.routes.js"

const router = express.Router();

router.get("/", getBlogs);
router.get("/:blogId", validateBlogExists, getBlogById);
router.use("/:blogId/comments", validateBlogExists, commentRoutes);

// router.get("/:blogId/comments", validateBlogExists, getCommentByBlogId);
// router.get("/:blogId/comments/:commentId", validateBlogExists, getCommentById);

export default router;
