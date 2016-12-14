/**
 * Created by Margot on 14/12/2016.
 */
const mongoose = require('mongoose');

const babyFootSchema = new mongoose.Schema({
  userId: String,
  name: String,
  creationDate: Number,
});

module.exports = mongoose.model('BabyFoot', babyFootSchema);

