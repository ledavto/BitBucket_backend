const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { productRouter, farmRouter, orderRouter } = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/farm", farmRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
