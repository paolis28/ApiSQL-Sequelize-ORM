const router = require('express').Router();
const {faker} = require('@faker-js/faker');
const Usuarios = require("../model/usuario.model");

router.get("/red_social/usuario:id", async (req,res)=>{
    const usuarios =await Usuarios.finAll()
    res.status(200).json({
        ok:true,
        status:200,
        body: usuarios
    })
})

router.get("/red_social/usuario:id", async(req,res)=>{
    const id= req.params.id;
    const usuario =await Usuarios.findOne({
        where:{
            id:id,
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        body: usuario
    })
})

router.post("/red_social", async (req,res)=>{
    await Usuarios.sync()
    const createUsuario=await Usuarios.create({
        nombre_usuario: faker.commerce.usuario(),
        email_usuario: faker.commerce.usuario()
    })
    res.status(201).json({
        ok:true,
        status:201,
        message:"Create User"
    })
})

router.put("/red_social/usuario:id", async (req,res)=>{
    const id=req.params.id
    const dataUsuarios=res.body;
    const updateUsuario=await Usuarios.update({
        nombre_usuario: faker.commerce.usuario(),
        email_usuario: faker.commerce.usuario()
    }, {
        where: {
            id:id
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        boyd:updateUsuario
    })
});


router.delete("/red_social/usuario:id", async(req,res)=>{
    const id=req.params.id;
    const deleteUsuario=await Usuarios.destroy({
        where:{
            id:id
        },
    })
    res.status(204).json({
        ok:true,
        status:204,
        body:deleteUsuario
    })
})

module.exports=router;