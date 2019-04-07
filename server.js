const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const people = require("./routes/api/people");

const app = express();

// public folder
app.use("/public", express.static(path.join(__dirname, "public")));

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
app.use("/api/people", people);

//Passport Middleware
app.use(passport.initialize());
//Passport config
require("./config/passport")(passport);

app.get("/", (req, res) => res.send("Hello world"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
