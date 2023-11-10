const Post = require("../model/journey");
async function addPosts(req, res, next) {
  const { text, imageURL, audioURL } = req.body;

  await Post.create({
    text,
    imageURL,
    audioURL
  });

  res.status(201).json({
    message: "Created"
  });
}
module.exports = addPosts;
