const mongoose = require("mongoose");

const schema = mongoose.Schema;

const noteSchema = schema(
  {
    title: {
      type: String,
      required: [true, 'Title is mandatory !!!'],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt adds to data
  }
);

module.exports = mongoose.model('Note',noteSchema)