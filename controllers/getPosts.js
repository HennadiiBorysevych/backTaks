const Post = require("../model/journey");

async function getPosts(req, res, next) {
  const posts = await Post.find();

  res.status(200).json(posts);
}

module.exports = getPosts;
