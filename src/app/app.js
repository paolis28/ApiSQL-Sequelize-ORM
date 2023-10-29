const express = require('express');
const Usuario = require('../router/usuario.router');
const Publicacion = require('../router/publicaciones.router');
const Comentarios= require('../router/comentarios.router');
const morgan = require('morgan');
const app=express();

app.use(morgan("dev"));

app.get('/',(req, res)=>{
    res.send('This is my App');
});

app.use(express.json());
app.use("/usuario", Usuario);
app.use("/publicacion", Publicacion);
app.use("/comentario", Comentarios);

module.exports=app;