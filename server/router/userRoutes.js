const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const dotenv=require('dotenv');
dotenv.config();

// Router for Create User
router.post("/create/user",
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('username').isLength({ min: 3 }),
  body('phonenumber').isLength({ min: 10 }),
  async (req, res) => {
    const error = validationResult(req);
    // const { username, password, email, phonenumber } = req.body
    if (!error.isEmpty()) {
      return res.status(400).json(error.array())
    }

    let foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
      return res.status(200).json("You already registered please go to login page")
    };
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password, salt)

    // create and store new user
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: secpass,
      profile: req.body.profile,
      phonenumber: req.body.phonenumber
    })
    const accessToken = jwt.sign({
      id: user._id,
      username: user.username
    }, process.env.ACCESS_TOKEN_SECRET
    );

    await user.save();
    if (user) {
      res.status(201).json({ message: `New user ${req.body.username} created`, accessToken })
    } else {
      res.status(400).json({ message: 'Invalid user data received' })
    }
  });

// Router for login
router.post('/login',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    try {
      const {email, password } = req.body
      if (!password || !email) {
        return res.status(400).json({ message: 'All fields are required' })
      }

      const foundUser = await User.findOne({ email }).exec()
      if (!foundUser) {
        return res.status(401).json({ message: 'User doesnt found' })
      }

      const match = await bcrypt.compare(password, foundUser.password)
      const JWTSEC = process.env.ACCESS_TOKEN_SECRET;
      if (!match) return res.status(401).json({ message: 'Wrong password' })
      const accessToken = jwt.sign({
        id: foundUser._id,
        username: foundUser.username
      },JWTSEC);
      const { ...other } = foundUser._doc
      res.status(200).json({ other,accessToken });
    } catch (error) {
      res.status(500).json("Internal error occured")
    }
  }
)

// Router for Update User id
// router.put('/update/:id')

// Router for delete current user id
// router.delete('/detele/:id')


// router.route('/update').patch()
// Router for Delete User
// router.route('/delete')
// Router for Get User Details

// Router for verify email

// Router for Send Password That Forgotten
// Router for reset Password

// Fetch Following User
// Fetch Post from following user
// Get All the user to follow
module.exports = router;