// Dependencies =============================================================

var router = require("express").Router();

// Routes ===================================================================

module.exports = function(db) {
  router.get("/", function(req, res) {
      res.render("index")
  });

  router.get("*", function(req, res) {
    res.render("index");
  });

  return router;
}