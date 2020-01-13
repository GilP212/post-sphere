const express = require("express"),
      bcrypt = require("bcrypt"),
      jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'User created!',
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// LOGIN
router.post("/login", (req, res, next) => {
  let fetchedUser;

  User
    .findOne({ email: req.body.email})
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication failed!"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Authentication failed!"
        });
      }
      //  Authentication Successful
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        'secret_this_should_be_longer',
        { expiresIn: '1h' }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id // Already in token, however this will save the decryption.
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Authentication failed!"
      });
    });
});

module.exports = router;
