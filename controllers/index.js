const { addFarm, fetchFarms } = require("./farmControllers");
const {
  addProduct,
  fetchProducts,
  fetchProductById,
} = require("./productControllers");

const { addOrder, fetchOrder } = require("./orderControllers");

module.exports = {
  addFarm,
  fetchFarms,
  addProduct,
  fetchProducts,
  fetchProductById,
  addOrder,
  fetchOrder,
};
