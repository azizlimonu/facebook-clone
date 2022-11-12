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
      const followingUser = await UserModel.findById(currentUserId);

      if (!followUser.followers.includes(currentUserId)) {
        // Push following target user to the list following from the current User ID
        await followUser.updateOne({ $push: { followers: currentUserId } });
        // Push followers Current User Id to the list of the followers Target Id
        await followingUser.updateOne({ $push: { following: id } });

        res.status(200).json("User followed!");
      } else {
        res.status(403).json("you are already following this id");
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  try {
    if (currentUserId === id) {
      res.status(403).json('Action Forbidden')
    } else {
      const unfollowUser = await UserModel.findById(id);
      const unfollowingUser = await UserModel.findById(currentUserId);

      if (unfollowUser.followers.includes(currentUserId)) {
        // removing followers list from the target User ID
        await unfollowUser.updateOne({ $pull: { followers: currentUserId } });
        // removing following from the list following from the current User ID
        await unfollowingUser.updateOne({ $pull: { following: id } });

        res.status(200).json("User unfollowed!");
      } else {
        res.status(403).json("You are not following this User")
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getUser, getAllUsers, updateUser, deleteUser, followUser, unfollowUser };