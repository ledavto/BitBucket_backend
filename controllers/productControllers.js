const { HttpError, ctrlWrapper } = require('../helpers');

const {Product} = require('../models');

const addProduct = ctrlWrapper(async (req, res) => {
  const { id: ownerFarm } = req.params;
  const { titleProd } = req.body;

  const isProductExists = await Product.findOne({ titleProd, ownerFarm });

  if (isProductExists) {
    throw HttpError(409, `Product "${titleProd}" already exist`);
  }

  const result = await Product.create({ ...req.body, ownerFarm });
  res.status(201).json(result);
});

const fetchProducts = ctrlWrapper(async (req, res) => {
  const { id: ownerFarm } = req.params;

  const listProducts = await Product.find({ ownerFarm });

  res.status(201).json({products:listProducts});
});

module.exports = {addProduct, fetchProducts};
