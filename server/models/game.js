var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// gameSchema organises the data to make the documents in MongoDB

var gameSchema = new Schema({
  title: { type: String, required: true },
  system: { type: String, required: true},
  date: { type: Date, required: false},
  genre: { type: String, required: false},
  user: {type: String, required: false},
});

var Game = mongoose.model('games', gameSchema);

module.exports = Game;
