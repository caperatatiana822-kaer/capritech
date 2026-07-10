const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const Mating = db.define('Mating', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaMonta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    numeroMonta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombreMacho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razaMacho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chapetaMacho: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombreHembra: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razaHembra: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chapetaHembra: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    posibleFechaParto: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'mounts'
});

module.exports = Mating;