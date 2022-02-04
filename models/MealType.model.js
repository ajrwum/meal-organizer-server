const { model, Schema } = require('mongoose');

const mealTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    timeslot: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    }
});

module.exports = model("MealType", mealTypeSchema);