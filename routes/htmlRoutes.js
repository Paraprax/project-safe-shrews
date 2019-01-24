var db = require("../models");
var express = require("express");

//app.use(express.static("public"));

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      title: "lalal",
      body: "<p>test </p>"
    });
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

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function(dbExamples) {
      res.render("example", {
        example: dbExamples
      });
    });
  });

  app.get("/user/login/:login", function(req, res) {
    db.Users.findOne({ where: { id: req.params.login } }).then(function(dbExamples) {
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
