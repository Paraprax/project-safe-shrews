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
    });
  });

  // loads user login page and grabs their data
  app.get("/user/login/:login", function(req, res) {
    db.tasks
      .findOne({where: { userid: req.params.login } })
      .then(function(dbExamples) {
        res.render("example", {
          example: dbExamples
        });
      });
  });

  //route for creating new tasks for user
  app.get("/user/tasks/:userid", function(req, res) {
    res.render("task", {
      user: req.params.userid
    });
  });

  // route for users current tasks and update tasks
  app.get("/user/profile/:userId", function(req, res) {
    db.tasks
      .findAll({
        where: {
          userid: req.params.userId
        }
      })
      .then(function(tasks) {
        console.log(`Tasks size: ${tasks.length}`);
        if(tasks.length > 0) {
          tasks.forEach((task) => {
            console.log(`Task: ${task.task}`);
            console.log(`Task UserId: ${task.userid}`);
          });
          res.render("profile", {
            tasks: tasks,
            encodedJSONTasks : encodeURIComponent(JSON.stringify(tasks)),
            user: req.params.userId
          });
        } else {
          res.render("profile", {
            user: req.params.userId
          });
        }
      });
  });

  app.get("/doughnut", function(req, res) {
    res.render("doughnut");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
