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
};
