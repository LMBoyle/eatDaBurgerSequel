module.exports = function(db) {
  return {
    getBurgers: function(req, res) {
      db.Burgers.findAll({}).then(function (dbBurger) {
        res.json(dbBurger)
      })
    },

    createBurger: function (req, res) {
      db.Burgers.create(req.body).then(function (dbBurger) {
        res.json(dbBurger);
      });
    },
  }
}