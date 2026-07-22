// getProducts
// searchProduct
// getProductById
// addProduct
// updateProduct
// deleteProduct

import { products } from "../data/products.js";

export function getProducts(req, res) {
  res.json(products);
}

export function searchProduct(req, res) {
  const query = req.query.name;

  const result = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );

  res.json(result);
}

export function getProductById(req, res) {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);
  if (!product) res.status(404).json({ error: "Product not found" });
  res.json(product);
}
