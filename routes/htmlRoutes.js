var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Load login page

  app.get("/login", function(req, res) {
    db.Users.findAll({}).then(function() {
      res.render("login");
    });
  });

  app.get("/signup", function(req, res) {
    db.Users.findAll({}).then(function(dbExamples) {
      res.render("signup", {
        msg: "Welcome!",
        examples: dbExamples
      });
      console.log("works");
    });
  });

  
 
// loads user login page and grabs their data
  app.get("/user/login/:login", function(req, res) {
    db.tasks.findOne({ where: { userid: req.params.login } }).then(function(dbExamples) {
      res.render("example", {
        example: dbExamples
      });
    });
  });
// loads user task page
  app.get("/user/tasks/:login", function(req, res) {
    db.tasks.findOne({ where: { userid: req.params.login } }).then(function(dbExamples) {
      res.render("task", {
        example: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
