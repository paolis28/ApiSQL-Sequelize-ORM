const router = require('express').Router();
const {faker} = require("@faker-js/faker") ;
const Comentarios =require("../model/comentarios.model");

router.get("/red_social/comentarios:id", async (req,res)=>{
    const comentarios =await Comentarios.finAll()
    res.status(200).json({
        ok:true,
        status:200,
        body: comentarios
    })
})

router.get("/red_social/comentarios:id", async(req,res)=>{
    const id= req.params.id;
    const comentarios =await Comentarios.findOne({
        where:{
            id:id,
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        body: comentarios
    })
})

router.post("/red_social", async (req,res)=>{
    await Comentarios.sync()
    const createComentario=await Comentarios.create({
        contenido: faker.commerce.comentario(),
        fechaCreacion: faker.commerce.comentario(),
        publicacionId: faker.commerce.comentario(),
        usuarioId: faker.commerce.comentario(),
    })
    res.status(201).json({
        ok:true,
        status:201,
        message:"Create Comentario"
    })
})

router.put("/red_social/comentarios:id", async (req,res)=>{
    const id=req.params.id
    const dataComentario=res.body;
    const updateComentario=await Comentarios.update({
        contenido: faker.commerce.comentario(),
        fechaCreacion: faker.commerce.comentario(),
        publicacionId: faker.commerce.comentario(),
        usuarioId: faker.commerce.comentario(),
    }, {
        where: {
            id:id
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        boyd:updateComentario
    })
});


router.delete("/red_social/comentarios:id", async(req,res)=>{
    const id=req.params.id;
    const deleteComentario=await Comentarios.destroy({
        where:{
            id:id
        },
    })
    res.status(204).json({
        ok:true,
        status:204,
        body:deleteComentario
    })
})

module.exports=router;