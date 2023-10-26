const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize("red_social", "root", "basepaola",{
    host: "localhost",
    dialect: "mysql",
    port: 3006
});


class Usuario extends Model{}

Usuario.init({
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

