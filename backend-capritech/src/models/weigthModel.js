const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const Weighing = db.define('Weighing', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaPesaje: {
        type: DataTypes.DATE,
        allowNull: false
    },
    chapeta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    etapaProduccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
});