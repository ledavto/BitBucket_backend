const { HttpError, ctrlWrapper } = require("../helpers");

const { Order } = require("../models");

const addOrder = ctrlWrapper(async (req, res) => {
  // const { title } = req.body;

  // const isProductExists = await Order.findOne({ title });

  // if (isProductExists) {
  //   throw HttpError(409, `Farm "${title}" already exist`);
  // }

  const result = await Order.create({ ...req.body });
  res.status(201).json(result);
});

const fetchOrder = ctrlWrapper(async (req, res) => {
  const listOrder = await Order.find({});

  res.status(201).json(listOrder);
});

module.exports = { addOrder, fetchOrder };
