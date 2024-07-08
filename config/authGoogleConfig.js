const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models/user");
const _ = require("lodash");

const strategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/redirect",
  },
  async (accessToken, refreshToken, profile, cb) => {
    let user = await User.findOne({
      googleId: profile.id,
      email: profile._json.email,
    });
    if (user) {
      console.log("User Exists : ", user);
    } else {
      user = new User({ googleId: profile.id, email: profile._json.email });
      await user.save();
      console.log("New User : ", user);
    }

    // console.log("I Am Callback Function!");
    // console.log("Profile : ", profile._json);

    // cb();
  }
);

passport.use(strategy);
