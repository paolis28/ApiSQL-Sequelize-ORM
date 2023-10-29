const router = require('express').Router();
const Publicacion = require('../model/publicaciones.model')

router.get("/Buscarpublicaciones", async (req,res)=>{
    try{
        const publicacion =await Publicacion.findAll()
        res.status(200).json({
            ok:true,
            status:200,
            body: publicacion
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar las publicaciones"})
    }
})

router.get("/BuscarUnicaPubli/:id", async(req,res)=>{
    try{
        const id= req.params.id;
        const publicacion =await Publicacion.findOne({
            where:{
                publicacion_id:id,
            }
        })
        res.status(200).json({
            ok:true,
            status:200,
            body: publicacion
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar la publicacion"})
    }
})

router.post("/agregarPubli", async (req,res)=>{
    const {publicacion_id,titulo,contenido,fechaCreacion,usuario_id}=req.body;
    try{
        await Publicacion.sync()
        const createPublicacion=await Publicacion.create({
            publicacion_id: publicacion_id,
            titulo:titulo,
            contenido:contenido,
            fechaCreacion:fechaCreacion,
            usuario_id:usuario_id
        });
        res.json(createPublicacion)
    }catch(error){
        res.status(500).json({error: "Error al agregar publicacion"})
        console.log(error)
    }
});

router.put("/modificarPubli/:id", async (req,res)=>{
    try{
        const id=req.params.id
        const {publicacion_id,titulo,contenido,fechaCreacion,usuarioId}=req.body;
        const updatePublicacion=await Publicacion.update({
            publicacion_id: publicacion_id,
            titulo:titulo,
            contenido:contenido,
            fechaCreacion:fechaCreacion,
            usuarioId:usuarioId
        }, {
            where: {
                publicacion_id:id
            }
        })
        res.send("Publicacion modificada")
    }catch(error){
        res.status(500).json({error: "Error al modificar publicacion"})
    }
});


router.delete("/eliminarPubli/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deletePublicacion=await Publicacion.destroy({
            where:{
                publicacion_id:id
            },
        })
        res.send("Publicacion eliminada")
    }catch(error){
        res.status(500).json({error: "Error al eliminar publicacion"})
    }
})

module.exports=router;