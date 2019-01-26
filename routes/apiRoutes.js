var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Users.findAll({}).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Users.create(req.body).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });

  app.get("/api/all", function(req, res) {
    db.Users.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //login
  app.post("/api/user/", function(req, res) {
    db.Users.findAll({
      where: {
        UserName: req.body.username,
        Password: req.body.password,
      }
    }).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });

  // tasks display
  app.get("/api/profile/:user", function(req, res) {
    db.tasks
      .findAll({
        where: {
          userName: req.params.user
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });

  // creates a task in the task table
  app.post("/api/tasks", function(req, res) {
    db.tasks.create(req.body).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });

  //create a update to task table
  app.put("/api/tasks/", function(req, res) {
    console.log(req.body);
    db.tasks
      .update({ completed: req.body.completed }, { where: { id: req.body.id } })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });
};
