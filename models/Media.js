const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const MediaSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  articleId: {
    type: String,
    required: true
  }
});

module.exports = Media = mongoose.model("media", MediaSchema);
