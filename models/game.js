const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String, required: true}
});

module.exports = mongoose.model('Game', gameSchema);
