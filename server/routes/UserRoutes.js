const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middleware/AuthMiddleware');
const { getUser, getAllUsers, updateUser, deleteUser, followUser, unfollowUser } = require('../controllers/UserController');

router.get('/:id', getUser);
router.get('/', authMiddleWare, getAllUsers);
router.put('/:id', authMiddleWare, updateUser);
router.delete('/:id', authMiddleWare, deleteUser);
router.put('/:id/follow', authMiddleWare, followUser);
router.put('/:id/unfollow', authMiddleWare, unfollowUser);

module.exports = router;