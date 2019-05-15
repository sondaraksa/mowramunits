const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  media: [],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model("articles", ArticleSchema);
