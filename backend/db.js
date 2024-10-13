const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Todo_App:pvmt3Sf9lEVw7ceS@cluster0.chalzlg.mongodb.net/"
);
const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todosSchema);

module.exports = {
  todo,
};
