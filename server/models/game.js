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
    console:{
      type: Schema.Types.ObjectId,
      ref: 'Console',
      required: true
    },
    link: {
      type: String
    },
    description: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Game = model('Game', gameSchema);

module.exports = Game;
