const router = require('express').Router();
const {faker} = require('@faker-js/faker');
const Usuario = require("../model/usuario.model");

router.get("/buscar/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        const usuarios = await Usuario.findByPk(id)
        res.status(200).json({
        ok:true,
        status:200,
        body: usuarios
    })
    } catch (error) {
        res.status(500).json({error: "Error al buscar los datos"})
    }
    
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
    const id = req.params.id
    const { usuario, email } = req.body;
    const updateUsuario = await Usuarios.update({
        usuario: usuario,
        email: email
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