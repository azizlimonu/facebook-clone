const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
const getAllUsers = async (req, res) => { }

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('Access Denied! You can update only your own Account.')
  }
}
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id)
      res.status(200).json(`user with id ${currentUserId} has been deleted`);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied!");
  }
}
const followUser = async (req, res) => {
  const id = req.params.id
  const { currentUserId } = req.body
  try {
    if (currentUserId === id) {
      res.status(403).json('Action Forbidden')
    } else {
      const followUser = await UserModel.findById(id);
      if (!followUser.followers.includes(currentUserId)) {
        await UserModel.updateOne({ id }, { $push: { followers: currentUserId } })
        await UserModel.updateOne({ currentUserId }, { $push: { following: id } })

        res.status(200).json("User followed!");
      } else {
        res.status(403).json("you are already following this id");
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const unfollowUser = async (req, res) => { }

module.exports = { getUser, getAllUsers, updateUser, deleteUser, followUser, unfollowUser };