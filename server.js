// Dependencies =============================================================

require('dotenv').config();
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

app.use('/api', require('./routes/apiRoutes')(db));
app.use(require('./routes/htmlRoutes')(db));

// Listen ===================================================================

// catch 404 and forward to error handler
if (app.get('env') !== 'development') {
  app.use((req, res, next) => {
    const err = new Error('Not Found: ' + req.url);
    err.status = 404;
    next(err);
  });
}

const syncOptions = {
  force: process.env.FORCE_SYNC === 'true'
};

if (app.get('env') === 'test') {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(() => {
  if (app.get('env') !== 'test' || syncOptions.force) {
    require('./db/seed.js')(db);
  }

  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
});

module.exports = app;
