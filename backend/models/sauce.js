const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  userId: { type:String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: String, required: false },
  dislikes: { type: String, required: false },
  userLiked: { type: [String], required: false },
  userDisliked: { type: [String], required: false },
});

module.exports = mongoose.model('Sauce', sauceSchema);