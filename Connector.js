'use strict';
const db = {};
var Sequelize = require("sequelize");
var Task = require("./Task");

var sequelizeConnector = new Sequelize('nodedb','root','', {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
});

sequelizeConnector.authenticate().then(function(err){
    console.log("Connection has been established successfully.");
}).catch(function(err){
    console.log("Error in connection -",err);
});

db.sequelize = sequelizeConnector;
db.Sequleize = Sequelize;

db.task = new Task(sequelizeConnector,Sequelize);


module.exports = db;