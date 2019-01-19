module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Users", {
    UserName: DataTypes.STRING,
    Password: DataTypes.TEXT
  });
  return Login;
};
