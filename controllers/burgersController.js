module.exports = function(db) {
  return {
    getBurgers: (req, res) => {
      db.Burgers.findAll({}).then(function (dbBurger) {
        res.json(dbBurger)
      })
    },

    createBurger: (req, res) => {
      db.Burgers.create(req.body).then(function (dbBurger) {
        res.json(dbBurger);
      });
    },

    updateBurger: (req, res) => {
      db.Burgers.update({
        numServed: req.body.numServed,
        numDevoured: req.body.numDevoured
      }, {
        where: { id: req.params.id }
      }).then(result => {
        res.json(result);
      });
    },
  }
}