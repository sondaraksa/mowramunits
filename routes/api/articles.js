const express = require("express");
const router = express.Router();
const passport = require("passport");
const _ = require("lodash");

//Load People Model
const Article = require("../../models/Article");

//Load Validation Article
const validationArticle = require("../../validation/article");

//@route    GET api/article/test
//@desc     Tests article route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Article works" }));

//@route    POST api/article
//@desc     Create article
//@access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validationArticle(req.body);
    // Check Validation
    if (!isValid) {
      //Return any errors with 400 status
      return res.status(400).json(errors);
    }

    try {
      if (!req.files) {
        res.send({
          status: false,
          message: "No file uploaded"
        });
      } else {
        let data = [];

        //loop all files
        _.forEach(_.keysIn(req.files.photos), key => {
          let photo = req.files.photos[key];
          let DateFormat =
            new Date().getFullYear() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getDay();

          photo.name =
            DateFormat +
            "-" +
            Math.floor(Math.random() * Math.floor(999999)) +
            "." +
            photo.name.split(".").pop();

          //move photo to uploads directory
          photo.mv("./client/public/uploads/" + photo.name);

          //push file details
          data.push({
            name: photo.name,
            mimetype: photo.mimetype,
            size: photo.size
          });
        });

        // Save Article
        const newArticle = new Article({
          title: req.body.title,
          content: req.body.content,
          media: data
        });
        newArticle
          .save()
          .then(article => res.json(article))
          .catch(err => res.status(400).json(err));
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//@route    GET api/articles
//@desc     Get all articles
//@access   public
router.get("/", (req, res) => {
  //   let limit = req.query.limit;
  //   let offset = req.query.offset;
  //   isEmpty(limit) ? (limit = 2) : (limit = limit);
  //   isEmpty(offset) ? (offset = 0) : (offset = offset);
  Article.find()
    // .skip(limit * offset) // page * limit
    // .limit(limit * 1) // 1 page retrieve 3
    .then(article => {
      if (!article) {
        errors.noarticle = "There are no article";
        return res.status(404).json(errors);
      }
      res.json(article);
    })
    .catch(err => res.status(404).json({ article: "There are no profiles" }));
});

//@route    GET api/articles/:article_id
//@desc     Get articles by article_id
//@access   Public
router.get("/:article_id", (req, res) => {
  const errors = {};

  Article.findOne({ _id: req.params.article_id })
    .then(article => {
      if (!article) {
        errors.noarticle = "There is no article";
        res.status(404).json(errors);
      }
      res.json(article);
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;
