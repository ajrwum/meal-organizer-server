const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    unique: true,
  },
  order: {
    type: Number,
    required: true,
  }
});

module.exports = model('Category', categorySchema);
