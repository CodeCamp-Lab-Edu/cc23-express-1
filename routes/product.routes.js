import express from "express";
import {
  getProducts,
  searchProduct,
  getProductById,
  addProduct
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/search", searchProduct);
router.get("/:id", getProductById);
router.post("/", addProduct)

export default router;
