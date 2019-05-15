const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Profile Model
const Profile = require("../../models/Profile");
//Load User Model
const User = require("../../models/User");

//@route    GET api/people/test
//@desc     Tests people route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

// @route    GET api/people/all
// @desc     Get all people
// @access   Public
router.get("/all", (req, res) => {
  const errors = {};
  People.find()
    .then(people => {
      if (people.length == 0 || people === undefined) {
        errors.nopeople = "There are no people";
        return res.status(404).json(errors);
      }
      res.json(people);
    })
    .catch(err => res.status(404).json({ people: "There are no profile" }));
});

//@route    POST api/people
//@desc     Create people
//@access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validationPeopleInput(req.body);
    //Check Validation
    if (!isValid) {
      //Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //ToDo create people
  }
);

//@route    PUT api/people/:_id
//@desc     Update people by id
//@access   Private
router.put(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validationPeopleInput(req.body);
    //Check Validation
    if (!isValid) {
      //Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //ToDo update people
  }
);

//@route    get api/people/:_id
//@desc     get people by id
//@access   public access
router.get("/:_id", (req, res) => {
  //ToDo get people by id
});

//@route    delete api/people/:_id
//@desc     delete people by id
//@access   Private
router.delete(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validationPeopleInput(req.body);
    //Check Validation
    if (!isValid) {
      //Return any errors with 400 status
      return res.status(400).json(errors);
    }

    //ToDo delete people
  }
);

module.exports = router;
