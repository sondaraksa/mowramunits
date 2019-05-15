const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const articles = require("./routes/api/articles");

const app = express();

// public folder
app.use("/public", express.static(path.join(__dirname, "public")));

//Upload File
app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 20 * 1024 * 1024 * 1024 //20MB max file(s) size
    }
  })
);

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

// Connect to MongooseDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongooseDB Connected"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

//Use Routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/articles", articles);

//Passport Middleware
app.use(passport.initialize());
//Passport config
require("./config/passport")(passport);

app.get("/", (req, res) => res.send("Hello world"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
