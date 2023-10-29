const {Sequelize} = require("sequelize");

const sequelize = new Sequelize( 
    "red_social", 
    "root", 
    "kato2601",
{
    host: "localhost",
    dialect: "mysql",
});

module.exports= sequelize;