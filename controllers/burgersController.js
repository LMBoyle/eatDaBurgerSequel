// Dependencies =============================================================

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes ===================================================================

// Get all the data and render it on the page
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var objectAll = {
      burgers: data
    }
    console.log(objectAll);
    res.render("index", objectAll)
  });
});

// Get all the data and render it as a json object
router.get("/api/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var objectAll = {
      burgers: data
    }
    res.json(objectAll)
  });
});

// Post the new burger to the database
router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burgerName, function(result) {
    res.json({id: result.insertId})
  });
});

// Update database
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition: ", condition);
  burger.updateOne({
    numServed: req.body.numServed,
    numDevoured: req.body.numDevoured
  }, condition, function(result) {
    if (result.changedRow == 0) {
      return res.status(404).end();
    }
    else {
      res.status(200).end()
    }
  })
})

// Export ===================================================================

module.exports = router;