const router = require("express").Router();
const passport = require("passport");
require("../config/authFacebookConfig");

router.route("/").get(passport.authenticate("facebook"));

router
  .route("/redirect")
  .get(passport.authenticate("facebook", { session: false }), (req, res) => {
    // console.log(req.body);
    res.send(req.user);
  });

module.exports = router;
