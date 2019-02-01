const express = require("express");
const router = express.Router();
// const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Validator = require("validator");

//Load RegisterInput Validator
const validateRegisterInput = require("../../validation/register");
//Load LoginInput Validator
const validateLoginInput = require("../../validation/login");
//Load changepassword input validator
const validatePasswordInput = require("../../validation/changepassword");

// Load User Model
const User = require("../../models/User");

//@route    GET api/users/test
//@desc     Tests users route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

//@route    POST api/users/register
//@desc     Register User
//@access   Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      //Todo Upload avatar
      const avatar = "";
      const newUser = new User({
        firstname_en: req.body.firstname_en,
        surname_en: req.body.surname_en,
        firstname_kh: req.body.firstname_kh,
        surname_kh: req.body.surname_kh,
        email: req.body.email,
        acc_type: req.body.acc_type,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
        });
      });
    }
  });
});

//@route    GET api/users/login
//@desc     Login User ? Returning JWT Token
//@access   Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //find user by email
  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      errors.email = "User Not Found !";
      return res.status(404).json(errors);
    }
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user matched
        //create jwt payload
        const payload = {
          id: user.id,
          firstname_en: user.firstname_en,
          surname_en: user.surname_en,
          firstname_kh: user.firstname_kh,
          surname_kh: user.surname_kh,
          acc_type: user.acc_type,
          avatar: user.avatar
        };
        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route    GET api/users/current
//@desc     Return current user
//@access   Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstname_en: req.user.firstname_en,
      surname_en: req.user.surname_en,
      firstname_kh: req.user.firstname_kh,
      surname_kh: req.user.surname_kh,
      acc_type: req.user.acc_type,
      email: req.user.email
    });
  }
);

//@route    POST api/users/current
//@desc     Update Password current user
//@access   Private
router.post(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePasswordInput(req.body);
    //check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //Get Fields
    const userFields = {
      _id: req.user.id,
      firstname_en: req.user.firstname_en,
      surname_en: req.user.surname_en,
      firstname_kh: req.user.firstname_kh,
      surname_kh: req.user.surname_kh,
      email: req.user.email,
      acc_type: req.user.acc_type,
      avatar: req.user.avatar,
      password: req.body.password
    };
    const oldPassword = req.body.oldPassword;

    bcrypt.compare(oldPassword, req.user.password).then(isMatch => {
      if (isMatch) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(userFields.password, salt, (err, hash) => {
            if (err) throw err;
            userFields.password = hash;
            User.findOneAndUpdate(
              { _id: req.user.id },
              { $set: userFields },
              { new: true }
            )
              .then(user => res.json(user))
              .catch(err => res.status(400).json(err));
          });
        });
      } else {
        errors.password = "Old Password incorrect";
        return res.status(400).json(errors);
      }
    });
  }
);

//@route    GET api/users/all
//@desc     Return all users
//@access   Private / admin
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.find()
      .then(user => {
        if (!user) {
          errors.nouser = "There are no users";
          return res.status(404).json(errors);
        }
        res.json(user);
      })
      .catch(err => res.status(404).json({ user: "There are no users" }));
  }
);

//@route    GET api/users/:user_id
//@desc     Return user by id
//@access   Private / admin
router.get(
  "/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ _id: req.params.user_id })
      .then(user => {
        if (!user) {
          errors.nouser = "There is no user !!";
          res.status(404).json(errors);
        }
        res.json(user);
      })
      .catch(err => res.status(404).json({ user: "There is no user !" }));
  }
);

//TODO Modify users account
//@route    POST api/users/:user_id
//@desc     Update user by id
//@access   Private / admin
router.post(
  "/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    //check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //Get Fields
    const userFields = {
      firstname_en: req.body.firstname_en,
      surname_en: req.body.surname_en,
      firstname_kh: req.body.firstname_kh,
      surname_kh: req.body.surname_kh,
      email: req.body.email,
      acc_type: req.body.acc_type,
      avatar: req.body.avatar,
      password: req.body.password
    };

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(userFields.password, salt, (err, hash) => {
        if (err) throw err;
        userFields.password = hash;
        User.findOneAndUpdate(
          { _id: req.params.user_id },
          { $set: userFields },
          { new: true }
        )
          .then(user => res.json(user))
          .catch(err => res.status(400).json(err));
      });
    });
  }
);

module.exports = router;
