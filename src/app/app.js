const express = require('express');
const router = require('../router/usuario.router');
const morgan = require('morgan');

const app=express();
app.use(morgan("dev"));

app.get('/',(req, res)=>{
    res.send('This is my App');
});

app.use(express.json());
app.use("/api/v1", router);

module.exports=app;