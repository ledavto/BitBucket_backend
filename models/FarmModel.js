const { Schema, model } = require('mongoose');
const Joi = require('joi');

const farmSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for Farm'],
    },
  },
  { versionKey: false }
);

//Для обработки ошибок валидации схемы и изменения статуса ошибки с 500 на 400
farmSchema.post('save', (error, data, next) => {
  error.status = 400;
  next();
});

const addFarmSchema = Joi.object({
  title: Joi.string().required(),
});

const schema = { addFarmSchema };

const Farm = model('farm', farmSchema);

module.exports = { Farm, schema };
