const express = require("express");
const { addOrder, fetchOrder } = require("../controllers");

const orderRouter = express.Router();

orderRouter.post("/", addOrder).get("/:id", fetchOrder);

module.exports = orderRouter;
