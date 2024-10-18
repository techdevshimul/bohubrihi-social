const authGoogleRouter = require("../routers/authGoogleRouter");
const authFacebookRouter = require("../routers/authFacebookRouter");

module.exports = (app) => {
  app.use("/auth/google", authGoogleRouter);
  app.use("/auth/facebook", authFacebookRouter);
};
