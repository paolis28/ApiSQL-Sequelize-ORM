const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize("red_social", "root", "basepaola",{
    host: "localhost",
    dialect: "mysql",
    port: 3006
});

class Comentarios extends Model{}

Comentarios.init({
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    contenido:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    fechaCreacion:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    publicacionId:{
        type:DataTypes.INTEGER,

        references:{
            model:Publicacion,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    usuarioId:{
        type:DataTypes.INTEGER,

        references:{
            model:Usuario,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
},{
    sequelize,
    modelName: "Comentarios"
});

module.exports=Comentarios;