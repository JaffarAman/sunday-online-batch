const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todo: {
    type: String,
  },
  create_at: {
    type: Date,
    default: Date.now(),
  },
});

const TodoModel = mongoose.model("todo", todoSchema);
module.exports = TodoModel;
