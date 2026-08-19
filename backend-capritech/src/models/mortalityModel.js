const db = require('../config/conectionDB');
const { DataTypes } = require('sequelize');

const Mortality = db.define('Mortality', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    chapeta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    diagnosticopresuntivo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'mortality',
    timestamps: true
});

module.exports = Mortality;