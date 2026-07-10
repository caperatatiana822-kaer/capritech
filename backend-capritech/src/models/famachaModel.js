const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const Famacha = db.define('Famacha', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chapeta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resultadoPrueba: {
        type: DataTypes.STRING,
        allowNull: false
    }
});