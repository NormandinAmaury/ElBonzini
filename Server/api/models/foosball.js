/**
 * Created by Margot on 14/12/2016.
 */
const mongoose = require('mongoose');

const foosballSchema = new mongoose.Schema({
  userId: String,
  name: String,
  picture: String,
  creationDate: Number,
});

module.exports = mongoose.model('Foosball', foosballSchema);

