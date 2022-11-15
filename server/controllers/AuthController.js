const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Handle Register User
const registerUser = async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);
  const { username } = req.body;
  try {
    // search duplicate user
    const oldUser = await UserModel.findOne({ username });
    if (oldUser) {
      return res.status(400).json({ message: "Username is already registered" })
    }
    // save to db
    const user = await newUser.save()
    const token = jwt.sign(
      {username: user.username, id: user._id}, 
      process.env.ACCESS_TOKEN_SECRET, 
      { expiresIn: '1h' }
    );
    res.status(200).json({user, token});
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
}

// Handle Login User
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json({ message: "Wrong Password" });
      } else {
        const token = jwt.sign(
          {username: user.username, id: user._id}, 
          process.env.ACCESS_TOKEN_SECRET, 
          { expiresIn: '1h' }
        );
        res.status(200).json({user,token});
      }
    } else {
      res.status(404).json({ message: "User Not Found" })
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { registerUser, loginUser };