const {Sequelize} = require('sequelize');

const db = new Sequelize(
    database = "capritech",
    username = "root",
    password = "kelly12345",
    {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = db;