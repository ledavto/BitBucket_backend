const {addFarm, fetchFarms} = require('./farmControllers');
const {addProduct, fetchProducts} = require('./productControllers');

module.exports = {
  addFarm,
  fetchFarms,
  addProduct,
  fetchProducts
};
