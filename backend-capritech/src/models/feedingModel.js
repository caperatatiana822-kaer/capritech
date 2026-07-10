const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const Feeding = db.define('Feeding', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsable: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});