var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {});
  });

  // Load login page

  app.get("/login", function (req, res) {
    db.Users.findAll({}).then(function () {
      res.render("login");
    });
  });

  app.get("/signup", function (req, res) {
    db.Users.findAll({}).then(function (dbExamples) {
      res.render("signup", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });



  // loads user login page and grabs their data
  app.get("/user/login/:login", function (req, res) {
    db.tasks.findOne({ where: { userid: req.params.login } }).then(function (dbExamples) {
      res.render("example", {
        example: dbExamples
      });
    });
  });
  //route for creating new tasks for user
  app.get("/user/tasks/:userid", function (req, res) {
    db.tasks.findAll({ where: { userid: req.params.userid } }).then(function (dbExamples) {
      res.render("task", {
        user: dbExamples[0].userid
      });
    });
  });

  //route for users current tasks and update tasks
  app.get("/user/profile/:login", function (req, res) {
    db.tasks.findAll({ where: { userid: req.params.login } }).then(function (dbProfile) {
      console.log(dbProfile)
      res.render("profile", {
        profile: dbProfile,
        user: dbProfile[0].userid
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
