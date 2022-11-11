const express = require('express');
const router = express.Router();
const { getUser, getAllUsers, updateUser, deleteUser, followUser, unfollowUser } = require('../controllers/UserController');

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);

module.exports = router;