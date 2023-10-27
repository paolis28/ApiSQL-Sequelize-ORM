const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize("red_social", "root", "basepaola",{
    host: "localhost",
    dialect: "mysql",
    port: 3006
});

class Publicaciones extends Model{}

Publicaciones.init({
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    contenido:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    fechaCreacion:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    usuarioId:{
        type:DataTypes.INTEGER,

        references:{
            model:Usuario,
            key:'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
},{
    sequelize,
    modelName: "Publicacion"
});

module.exports=Publicaciones;