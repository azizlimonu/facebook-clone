const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/AuthController');


// router.get('/',async(req,res)=>{res.send()})
router.post('/register', registerUser);
router.post('/login',loginUser)
// router.post('/', authController.handleGoogleLogin);
// router.post('/', authController.handleGithubLogin);

module.exports = router;