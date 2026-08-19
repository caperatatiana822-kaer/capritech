// models/birthsModel.js
const db = require('../config/conectionDB');
const { DataTypes } = require('sequelize');

const Birth = db.define('Birth', {
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
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    raza: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pesoNacimiento: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    chapetaMadre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    chapetaPadre: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'births',
    timestamps: true
});

module.exports = Birth;