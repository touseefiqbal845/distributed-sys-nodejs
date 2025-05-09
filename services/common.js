const passport = require("passport");
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "touseefiqbal845@gmail.com",
    pass: "skad yqdn xsnm fytz",
  },
});

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTEzNjRlMjk0MDQwZDk2ODEyOWE2MiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQyODE0NDA0LCJleHAiOjE3NDI4MTgwMDR9.Xr6WJi22ppN3UdC_iHlV9ok4HYTAAz7rfroAty4jE6c";
  return token;
};

exports.sanitizeUser = (user) => {
  if (!user || !user.dataValues) {
    return null;
  }
  const userData = user.dataValues;

  return {
    id: userData.id.toString(),
    role: userData.role || "default",
  };
};



exports.sendMail = async function ({ to, subject, text, html }) {
  let info = await transporter.sendMail({
    from: "touseefiqbal845@gmail.com",
    to,
    subject,
    text,
    html,
  });
  return info;
};
