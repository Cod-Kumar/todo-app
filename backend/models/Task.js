const { sequelize, DataTypes } = require('sequelize');
const connection = require('../config');

const Task = connection.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

connection.sync();

module.exports = Task;