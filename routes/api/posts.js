const express = require("express");
const router = express.Router();

const addPost = require("../../controllers/addPost");
const getPosts = require("../../controllers/getPosts");

router.get("/", getPosts);

router.post("/", addPost);

module.exports = router;
