const router = require("express").Router();
const passport = require("passport");
require("../config/authGoogleConfig");

router
  .route("/")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router.route("/redirect").get(
  passport.authenticate("google", (req, res) => {
    console.log(req.body);
    res.send("I Am Redirect URI!");
  })
);

module.exports = router;
