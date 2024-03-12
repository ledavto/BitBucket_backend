const { addFarm, fetchFarms } = require("./farmControllers");
const {
  addProduct,
  fetchProducts,
  fetchProductById,
} = require("./productControllers");

module.exports = {
  addFarm,
  fetchFarms,
  addProduct,
  fetchProducts,
  fetchProductById,
};
