const {DataTypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity',{
        name: {
            type: DataTypes.STRING
        }
    })
} 

