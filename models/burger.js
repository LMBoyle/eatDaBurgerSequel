module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    numServed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    numDevoured: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  });
  return Burgers;
};