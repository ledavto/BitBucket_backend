const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name"],
    },
    email: {
      type: String,
      required: [true, "Set email"],
    },
    phone: {
      type: String,
      required: [true, "Set phone"],
    },
    city: {
      type: String,
      required: [true, "Set city"],
    },
    // products:{}
  },
  { versionKey: false }
);

//Для обработки ошибок валидации схемы и изменения статуса ошибки с 500 на 400
orderSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const addOrderSchema = Joi.object({
  title: Joi.string().required(),
});

const schema = { addOrderSchema };

const Order = model("order", orderSchema);

module.exports = { Order, schema };
