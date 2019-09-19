var util = require("util");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const _ = require("lodash");
const isEmpty = require("../../validation/is-empty");

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
        let files = 1;
        _.forEach(_.keysIn(req.files.file), key => {
          if (Number.isInteger(parseInt(key))) {
            files = parseInt(key) + 1;
            //alot of file

            let photo = req.files.file[key];
            photo.name = changeFileName(photo);

            //move photo to uploads directory
            photo.mv("./client/public/uploads/" + photo.name);

            //push file details
            data.push({
              name: photo.name,
              mimetype: photo.mimetype,
              size: photo.size
            });
          }
        });

        if (files === 1) {
          //only one file
          let photo = req.files.file;
          photo.name = changeFileName(photo);
          photo.mv("./client/public/uploads/" + photo.name);

          //push file details
          data.push({
            name: photo.name,
            mimetype: photo.mimetype,
            size: photo.size
          });
        }

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
  let limit = req.query.limit ? parseInt(req.query.limit) : 0;
  let offset = req.query.offset ? parseInt(req.query.offset) : 0;
  // isEmpty(limit) ? (limit = 0) : (limit = limit); //default limit = 0

  let nextOffset = offset + limit;
  let previousOffset = offset - limit < 1 ? 0 : offset - limit;
  let items;
  let meta;
  let json;

  Article.find()
    .sort({ date: -1 })
    .then(article => {
      if (!article) {
        errors.noarticle = "There are no article";
        return res.status(404).json(errors);
      }
      if (limit === 0 && offset === 0) return res.json(article);

      items = article;

      meta = {
        limit: limit,
        next: util.format("?limit=%s&offset=%s", limit, nextOffset),
        offset: offset,
        previous: util.format("?limit=%s&offset=%s", limit, previousOffset),
        total_count: items.length
      };

      json = {
        meta: meta,
        article: getPaginatedItems(items, offset)
      };

      return res.json(json);
    })
    .catch(err => res.status(404).json({ article: "There are no profiles" }));
});

//@route    GET api/totalarticlecount
//@desc     Get totalarticlecount
//@access   public
router.get("/totalarticlecount", (req, res) => {
  let TotalCount;
  Article.find()
    .then(article => {
      if (!article) {
        errors.noarticle = "There are no article";
        return res.status(404).json(errors);
      }
      TotalCount = article.length;
      res.json(TotalCount);
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

const changeFileName = file => {
  let DateFormat =
    new Date().getFullYear() +
    "-" +
    new Date().getMonth() +
    "-" +
    new Date().getDay();
  file.name =
    DateFormat +
    "-" +
    Math.floor(Math.random() * Math.floor(999999)) +
    "." +
    file.name.split(".").pop();
  return file.name;
};

function getPaginatedItems(items, offset) {
  return items.slice(offset, parseInt(offset) + 3); // 3 is defualt limit per page
}

module.exports = router;
