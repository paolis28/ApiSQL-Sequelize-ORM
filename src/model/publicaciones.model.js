const sequelize = require('../database');
const {DataTypes} = require('sequelize');
const Usuario = require('./usuario.model')

const Publicacion = sequelize.define('Publicacion', {
    publicacion_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    titulo:{
        type:DataTypes.STRING,
    },
    contenido:{
        type:DataTypes.STRING,
    },
    fechaCreacion:{
        type:DataTypes.STRING,
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


module.exports = Publicacion;
