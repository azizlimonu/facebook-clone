const dotenv=require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const JWTSEC = process.env.ACCESS_TOKEN_SECRET;


const verifyToken = (req, res, next) => {
  const authHeader = req.header.token;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, JWTSEC, (err, user) => {
      if (err) return res.status(400).json("Some error occured");
      req.user = user;
      next();
    })
  } else {
    return res.status(400).json("Access token is not valid")
  }
}

module.exports = { verifyToken };