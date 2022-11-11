const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Handle Register User
const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel({ username, password: hashedPass, firstname, lastname });

  try {
    await newUser.save()
    res.status(200).json({ message: `User ${newUser} successfully created` });
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
        res.status(200).json(user);
      }
    } else {
      res.status(404).json({ message: "User Not Found" })
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { registerUser, loginUser };