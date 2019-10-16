// Dependencies =============================================================

var router = require("express").Router();

// Routes ===================================================================

module.exports = function(db) {
  router.get("/", function(req, res) {
    db.Burgers.findAll({}).then(function (dbBurgers) {
      res.render("index", {
        burgers: dbBurgers
      })
    })
  });
  return router;
}