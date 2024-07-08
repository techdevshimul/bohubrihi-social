const router = require("express").Router();
const passport = require("passport");
require("../config/authGoogleConfig");

router.route("/").get(passport.authenticate("google", { scope: ["profile"] }));

router.route("/redirect").get();

module.exports = router;
