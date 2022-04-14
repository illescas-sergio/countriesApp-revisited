const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Country', {
        name: DataTypes.STRING
    }
    );
}
