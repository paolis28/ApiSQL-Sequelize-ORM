const router = require('express').Router();
const Comentarios =require("../model/comentarios.model");

router.get("/BuscarComentarios", async (req,res)=>{
    try{
        const comentarios =await Comentarios.findAll()
        res.status(200).json({
            ok:true,
            status:200,
            body: comentarios
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar los comentarios"})
    }
})

router.get("/BuscarUnicoComen/:id", async(req,res)=>{
    try{
        const id= req.params.id;
        const comentarios =await Comentarios.findOne({
            where:{
                comentario_id:id,
            }
        })
        res.status(200).json({
            ok:true,
            status:200,
            body: comentarios
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar el comentario"})
    }
})

router.post("/agregarComentario", async (req,res)=>{
    const {comentario_id , contenido, fechaCreacion, publicacion_id, usuario_id}=req.body;
    try{
        await Comentarios.sync()
        const createComentario=await Comentarios.create({
            comentario_id: comentario_id,
            contenido: contenido,
            fechaCreacion: fechaCreacion,
            publicacion_id: publicacion_id,
            usuario_id: usuario_id
        })
        res.json(createComentario)
    }catch(error){
        res.status(500).json({error: "Error al añadir comentario"})
    }
})

router.put("/comentarios/:id", async (req,res)=>{
    const {comentario_id , contenido, fechaCreacion, publicacion_id, usuario_id}=req.body;
    try{
        const id=req.params.id
        const dataComentario=res.body;
        const updateComentario=await Comentarios.update({
            comentario_id: comentario_id,
            contenido: contenido,
            fechaCreacion: fechaCreacion,
            publicacion_id: publicacion_id,
            usuario_id: usuario_id
        }, {
            where: {
                comentario_id:id
            }
        })
        res.send("Comentario modificado")
    }catch(error){
        res.status(500).json({error: "Error al modificar el comentario"})
    }
});


router.delete("/Eliminarcomen/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteComentario=await Comentarios.destroy({
            where:{
                comentario_id:id
            },
        })
        res.send("Comentario eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar el comentario"})
    }
})

module.exports=router;