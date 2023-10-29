const {Sequelize} = require("sequelize");

const sequelize = new Sequelize( 
    "red_social", 
    "root", 
    "basepaola",
{
    host: "localhost",
    dialect: "mysql",
});

module.exports= sequelize;