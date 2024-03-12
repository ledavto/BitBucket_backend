const express = require("express");
const {
  addProduct,
  fetchProducts,
  fetchProductById,
} = require("../controllers");

const productRouter = express.Router();

productRouter
  .post("/:id", addProduct)
  .get("/:id", fetchProducts)
  .get("/id/:id", fetchProductById);

module.exports = productRouter;
