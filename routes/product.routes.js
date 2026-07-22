import express from "express";
import {
  getProducts,
  searchProduct,
  getProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/search", searchProduct);
router.get("/:id", getProductById);

export default router;
