const { Schema, model } = require('mongoose');
const consoleSchema= require('./console')
const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Game must have a title!',
      minlength: 1,
      maxlength: 280
    },
    releaseYear: {
      type: String,
    },
    console: [consoleSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Game = model('Game', gameSchema);

module.exports = Game;
