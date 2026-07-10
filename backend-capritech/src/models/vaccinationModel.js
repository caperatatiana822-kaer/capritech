const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const Vaccination = db.define('Vaccination', {
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
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vacuna: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsable: {
        type: DataTypes.STRING,
        allowNull: false
    }
});