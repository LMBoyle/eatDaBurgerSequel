// Dependencies =============================================================

var router = require("express").Router()

// Routes ===================================================================

module.exports = function(db) {
  var appController = require("../controllers/burgersController.js")(db);

  router.get("/api/burgers", appController.getBurgers);
  // router.post("/api/burgers", appController.createBurger);

  return router;
}