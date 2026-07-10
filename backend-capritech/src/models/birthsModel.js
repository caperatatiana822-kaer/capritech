const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const Birth = db.define('Birth', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chapeta: {
        type: DataTypes.INTEGER,
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
    nombreMadre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razaMadre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chapetaPadre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombrePadre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razaPadre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gananciaPeso: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    }
});