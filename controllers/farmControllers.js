const { HttpError, ctrlWrapper } = require('../helpers');

const {Farm} = require('../models');

const addFarm = ctrlWrapper(async (req, res) => {
  const { title} = req.body;

  const isProductExists = await Farm.findOne({ title });

  if (isProductExists) {
    throw HttpError(409, `Farm "${title}" already exist`);
  }

  const result = await Farm.create({ ...req.body });
  res.status(201).json(result);
});

const fetchFarms = ctrlWrapper(async (req, res) => {

  const listFarms = await Farm.find({});

  res.status(201).json({Farms:listFarms});
});

module.exports = {addFarm, fetchFarms};
