const { Schema, model } = require("mongoose");
const  handleMongooseError  = require("../helpers/mongoError");

const postSchema = new Schema(
  {
    text: {
      type: String
    },
    imageURL: {
      type: String
    },
    audioURL: {
      type: String
    }
  },
  { versionKey: false, timestamps: true }
);

postSchema.post("save", handleMongooseError);

const Post = model("post", postSchema);

module.exports = Post;
