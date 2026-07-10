const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');
const Mortality = db.define('Mortality', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        max: 30,
        min: 3,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    production: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    diagnosis: {
        type: DataTypes.STRING,
        allowNull: false
    }
});