const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const { verifyToken } = require('./verifyToken');
const dotenv=require('dotenv');
dotenv.config();

// Create Post
router.post("/user/post", async (req, res) => {
  try {
    let { title, image, video } = req.body;
    const post = await Post.create({
      title, image, video, user: req.user.id
    })
    // const post = await newpost.save()
    res.status(200).json(post)
  } catch (error) {
    return res.status(500).json("Internal error anjing")
  }
})

// Get Post from user id

// update user post

// Like Post

// Dislike Post

// Create Comment

// Delete Post

// Get post from following user 

// Get post from a followers user
module.exports = router;