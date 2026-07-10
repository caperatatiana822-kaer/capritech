const db = require('../config/conectionDB');
const {DataTypes} = require('sequelize');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        max: 50,
        min:3,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        max: 50,
        min: 5,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        max:50,
        min: 3,
        allowNull: false
    },
    documentId:{
        type: DataTypes.STRING,
        max: 30,
        min: 5,
        allowNull: false,
        unique: true
    },
    postJobs: {
        type: DataTypes.STRING,
        max: 50,
        mim: 3,
        defaultValue: "false"
    },
    verifyEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: "false"
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

});

module.exports = User;