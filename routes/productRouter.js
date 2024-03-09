const express = require('express');
const { addProduct, fetchProducts } = require('../controllers');

const productRouter = express.Router();

productRouter
    .post('/:id', addProduct)
    .get('/:id', fetchProducts);

module.exports = productRouter;
