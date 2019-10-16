// Dependencies =============================================================

var router = require("express").Router()

// Routes ===================================================================

module.exports = function(db) {
  var appController = require("../controllers/burgersController.js")(db);

  router.get("/burgers", appController.getBurgers);
  router.post("/burgers", appController.createBurger);
  router.put("/burgers/:id", appController.updateBurger)

  return router;
}