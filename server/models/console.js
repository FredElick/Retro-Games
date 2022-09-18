const { Schema, model } = require('mongoose');

const consoleSchema = new Schema(
    {
        name: {
            type: String,
            required: 'Console must have a name',
            minlength: 1,
            maxlength: 100,
        },
        releaseDate: {
            type: String,
            minlength: 1,
            maxlength: 100,
        },
        developer: {
            type: String,
            minlength: 1,
            maxlength: 100,
        },
        link: {
            type: String
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
);

const Console = model('Console', consoleSchema);

module.exports = Console;