// Dependencies =============================================================

var orm = require("../config/orm.js");

// ORM ======================================================================

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    })
  },
  insertOne: function(vals, cb) { 
    orm.insertOne("burgers", vals, function(res) {
      cb(res)
    })
  },
  updateOne: function(vals, condition, cb) {
    orm.updateOne("burgers", vals, condition, function(res) {
      cb(res)
    })
  }
}

// Export ===================================================================

module.exports = burger;