const express = require('express');
const router = express.Router();
const { getUser, getAllUsers, updateUser, deleteUser, followUser, unfollowUser } = require('../controllers/UserController');

router.get('/:id', getUser);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);

module.exports = router;