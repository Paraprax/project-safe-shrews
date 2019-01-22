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
  app.get("/api/user/:login", function(req, res) {
    db.Users.findAll({
      where: {
        userName: req.params.login
      }
    }).then(function(results) {
      res.json(results);
    });
  });
};
