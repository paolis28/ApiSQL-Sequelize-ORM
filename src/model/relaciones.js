const Usuario = require('./usuario.model');
const Publicaciones = require('./publicaciones.model');
const Comentarios = require('./comentarios.model');

Usuario.hasMany(Comentarios);
Usuario.hasMany(Publicaciones);

Publicaciones.hasMany(Comentarios);
Publicaciones.belongsTo(Usuario);

Comentarios.belongsTo(Usuario);


