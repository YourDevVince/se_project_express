const mongoose = require("mongoose");
const validator = require("validator");

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  weather: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: "Link is not a valid URL",
    },
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user", default: [] }],
});

module.exports = mongoose.model("items", clothingItemSchema);
