// Dependencies =============================================================

var express = require("express");
var exphbs = require("express-handlebars");
const handlebars = require('handlebars');
const repeat = require('handlebars-helper-repeat');

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

var db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars ===============================================================

var hbs = exphbs.create({
  defaultLayout: "main",
  helperRepeat: handlebars.registerHelper('repeat', repeat),
})

app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

// Routes ===================================================================

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Listen ===================================================================

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});