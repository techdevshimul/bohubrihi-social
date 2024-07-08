const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const strategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/redirect",
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log("I Am Callback Function!");
    console.log("Profile : ", profile._json);

    cb();
  }
);

passport.use(strategy);
