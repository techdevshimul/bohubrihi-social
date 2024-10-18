const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { User } = require("../models/user");
const _ = require("lodash");

const strategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3001/auth/facebook/redirect",
  },
  async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    // let user = await User.findOne({
    //   googleId: profile.id,
    //   email: profile._json.email,
    // });
    // if (user) {
    //   // console.log("User Exists : ", user);
    //   const token = user.generateJWT();
    //   const response = {
    //     user: _.pick(user, ["email", "_id"]),
    //     token: token,
    //   };

    //   cb(null, response);
    // } else {
    //   user = new User({ googleId: profile.id, email: profile._json.email });
    //   await user.save();
    //   // console.log("New User : ", user);

    //   const token = user.generateJWT();
    //   const response = {
    //     user: _.pick(user, ["email", "_id"]),
    //     token: token,
    //   };
    //   cb(null, response);
    // }
  }
);

passport.use(strategy);
