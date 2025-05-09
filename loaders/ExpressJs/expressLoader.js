const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const sessionConfig = require("../../Config/session");
const passport = require("passport");
const passportConfig = require("../../Config/passport");

const expressLoader = (app) => {
  app.use(express.json({ limit: "150mb" }));
  app.use(express.urlencoded({ limit: "150mb", extended: true, parameterLimit: 5000 }) );
  app.use(cors());
  app.use(cookieParser());

  // sessionConfig(app);
  passportConfig();
  app.use(passport.initialize());
  // app.use(passport.session());

  console.log("Express middleware initialized");
};

module.exports = expressLoader;
