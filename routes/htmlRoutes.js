var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Users.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
      console.log("works");
    });
  });

  // Load login page

  app.get("/login", function(req, res) {
    db.Users.findAll({}).then(function(dbExamples) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbExamples
      });
      console.log("works");
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function(dbExamples) {
      res.render("example", {
        example: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
