const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();
const router = express.Router();

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5656/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    const payload = {
      id: req.user.id,
      name: req.user.displayName,
      email: req.user.emails[0].value,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.redirect(`http://localhost:5173/google-success?token=${token}`);
  }
);

module.exports = router;
