import express from "express";
import {
  getBlogs,
  getBlogById,
  getBlogSummary
} from "../controllers/blog.controller.js";
import { validateBlogExists } from "../middlewares/validateBlogExists.js";
import commentRoutes from "./comment.routes.js"

const router = express.Router();
//: /blogs

router.get("/", getBlogs);
router.get("/summary", getBlogSummary)
router.get("/:blogId", validateBlogExists, getBlogById);
router.use("/:blogId/comments", validateBlogExists, commentRoutes);


export default router;
