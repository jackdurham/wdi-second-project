const mongoose = require('mongoose');

const commntSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commntSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id.toString() === user._id.toString();
};

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String, required: true},
  videoId: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commntSchema ]
});

gameSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id.toString() === user._id.toString();
};

module.exports = mongoose.model('Game', gameSchema);
