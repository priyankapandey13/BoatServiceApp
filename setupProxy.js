const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/", "/Login", "/Register", "/Dashboard", "/Job-Ads", "/Proposals", "/Reviews", "/Profile"], { target: "http://localhost:3000" })
  );
};