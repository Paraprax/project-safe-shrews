module.exports = function (sequelize, DataTypes) {
    var userData = sequelize.define("tasks", {
        userid: DataTypes.STRING,
        task: DataTypes.STRING,
        unit: DataTypes.STRING,
        target: DataTypes.INTEGER,
        completed :DataTypes.INTEGER
    });
    return userData;
};
