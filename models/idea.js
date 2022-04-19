const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create my schema
const ideaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Idea = mongoose.model("Idea", ideaSchema);
module.exports = Idea;
