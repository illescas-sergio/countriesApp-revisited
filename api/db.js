require('dotenv').config();
const {Sequelize} = require('sequelize');
const {DB_USER, DB_HOST, DB_PASSWORD, DB_PORT} = process.env;
const activityModel = require('./src/models/Activity');
const countryModel = require('./src/models/Country');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/countriesrev`, {
    //logging: false
});

activityModel(sequelize);
countryModel(sequelize);

const {Country, Activity} = sequelize.models;

Country.belongsToMany(Activity, {through: ("country_activity")});
Activity.belongsToMany(Country, {through: ("country_activity")})


module.exports = {
    conn: sequelize
}