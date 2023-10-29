const { DataTypes} = require('sequelize');
const sequelize = require ('../database');
const Usuario = require('./usuario.model');
const Publicaciones = require('./publicaciones.model');

const Comentarios=sequelize.define('Comentarios', {
    comentario_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    contenido:{
        type:DataTypes.STRING,
    },
    fechaCreacion:{
        type:DataTypes.STRING,
    },

    publicacion_id:{
        type:DataTypes.INTEGER,

        references:{
            model:Publicaciones,
            key:'publicacion_id',
        }
    },

    usuario_id:{
        type:DataTypes.INTEGER,
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        
        references:{
            model:Usuario,
            key:'usuario_id'
        }
    }
});

module.exports=Comentarios;