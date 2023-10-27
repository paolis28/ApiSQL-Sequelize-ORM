const router = require('express').Router();
const {faker} = require('@faker-js/faker');
const Publicaciones = require ('../model/publicaciones.model');

router.get("/red_social/publicaciones:id", async (req,res)=>{
    const publicacion =await Publicaciones.finAll()
    res.status(200).json({
        ok:true,
        status:200,
        body: publicacion
    })
})

router.get("/red_social/publicaciones:id", async(req,res)=>{
    const id= req.params.id;
    const publicacion =await Publicaciones.findOne({
        where:{
            id:id,
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        body: publicacion
    })
})

router.post("/red_social", async (req,res)=>{
    await Publicaciones.sync()
    const createPublicacion=await Publicaciones.create({
        titulo: faker.commerce.publicacion(),
        contenido: faker.commerce.publicacion(),
        fechaCreacion: faker.commerce.publicacion(),
        usuarioId: faker.commerce.publicacion(),
    })
    res.status(201).json({
        ok:true,
        status:201,
        message:"Create Publication"
    })
})

router.put("/red_social/publicaciones:id", async (req,res)=>{
    const id=req.params.id
    const dataPublicacion=res.body;
    const updatePublicacion=await Publicaciones.update({
        titulo: faker.commerce.publicacion(),
        contenido: faker.commerce.publicacion(),
        fechaCreacion: faker.commerce.publicacion(),
    }, {
        where: {
            id:id
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        boyd:updatePublicacion
    })
});


router.delete("/red_social/publicaciones:id", async(req,res)=>{
    const id=req.params.id;
    const deletePublicacion=await Publicaciones.destroy({
        where:{
            id:id
        },
    })
    res.status(204).json({
        ok:true,
        status:204,
        body:deletePublicacion
    })
})

module.exports=router;