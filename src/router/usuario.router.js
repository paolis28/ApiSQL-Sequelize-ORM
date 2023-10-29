const router = require('express').Router();
const Usuario = require("../model/usuario.model");

router.get("/buscarTodos", async (req,res)=>{
    try {
        const usuario = await Usuario.findAll()
        res.status(200).json({
        ok:true,
        status:200,
        body: usuario
    })
    } catch (error) {
        res.status(500).json({error: "Error al buscar los datos"})
    }
})

router.get("/buscarUnico/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const usuario =await Usuario.findOne({
            where:{
                usuario_id:id,
            }
        })
        res.status(200).json({
            ok:true,
            status:200,
            body: usuario
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar el dato"});
        console.log(error);
    }
})

router.post("/agregar", async (req,res)=>{
    const {usuario_id, nombre, email }=req.body;
    try{
        await Usuario.sync()
        const usuario = await Usuario.create({
            usuario_id: usuario_id,
            nombre: nombre,
            email: email
        });
        res.json(usuario);
    }catch(error){
        res.status(500).json({error: "Error al agregar los datos"});
        console.log(error);
    }
})

router.put("/modificar/:id", async (req,res)=>{
    try{
        const id = req.params.id
        const { usuario, email} = req.body;
        const updateUsuario = await Usuario.update({
            usuario: usuario,
            email: email,
        }, {
            where: {
                usuario_id:id
            }
        })
        res.send("Usuario Modificado");
    }catch(error){
        res.status(500).json({error: "Error al modificar los datos"});
        console.log(error);
    }
});


router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteUsuario=await Usuario.destroy({
            where:{
                usuario_id:id
            },
        })
        res.send("Usuario eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar los datos"});
        console.log(error);
    }
})

module.exports=router;