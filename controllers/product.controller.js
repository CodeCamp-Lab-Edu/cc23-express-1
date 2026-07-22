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

export function addProduct(req, res) {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price,
  };

  products.push(newProduct);
  res.status(201).json({
    message: "Prodcut Add",
    product: newProduct,
  });
}
