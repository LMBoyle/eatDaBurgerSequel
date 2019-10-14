// Dependencies =============================================================

var connection = require("./connection.js");

// Helpers ==================================================================
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Methods ==================================================================
// ORM methods to select, add and update
var orm = {
  selectAll: function(tableInput, cb) {
    // SELECT * FROM ____
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res)
    })
  },
  insertOne: function(table, vals, cb) {
    // INSERT INTO ___ (burgerName) VALUES ___
    var queryString = "INSERT INTO " + table + " (burgerName) VALUES (?);"
    console.log("Insert query string: ", queryString);

    connection.query(queryString, vals, function(err, res) {
      if (err) throw err;
      cb(res)
    })
  },
  updateOne: function(table, vals, condition, cb) {
    // UPDATE ___ SET ___=___ WHERE ___
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(vals);
    queryString += " WHERE ";
    queryString += condition;
    queryString += ";"
    console.log("Update query string: ", queryString)

    connection.query(queryString, vals, function(err, res) {
      if (err) throw err;
      cb(res)
    })
  },
}

// Export ===================================================================

module.exports = orm;