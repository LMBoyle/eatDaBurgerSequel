// Dependencies =============================================================

"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename)
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, "/../config/config/js"))[env];
var db = {}

// Sequelize ================================================================

config.details.operatorsAliases = {
  $and: Sequelize.Op.and,
  $or: Sequelize.Op.or,
  $eq: Sequelize.Op.eq,
  $gt: Sequelize.Op.gt,
  $lt: Sequelize.Op.lt,
  $lte: Sequelize.Op.lte,
  $like: Sequelize.Op.like
};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config.details);
};

fs.readdirSync(__dirname).filter((file) => {
  return (file.indexOf(".") !==0) && (file !== basename) && (file.slice(-3) === '.js') && (file !== 'index.js');
}).forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export ===================================================================

module.exports = db;