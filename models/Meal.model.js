const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
  type: {
    type: Schema.Types.ObjectId,
    ref: 'MealType',
    required: true,
  },
  foods: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Food',
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = model('Meal', mealSchema);
