const router = require('express').Router();
const {faker} = require("@faker-js/faker") ;

const Red_social=require("../model/red_social.model");

router.get("/red_social", async(req,res)=>{
    const red_social=await Red_social.finAll();

    res.status(200).json({
        ok:true,
        status:200,
        body: red_social,
    });
})

router.get("/products/:publicacion_id", async (req, res) => {
    const id = req.params.product_id;
    const red_social = await Red_social.findOne({
        where: {
            publicacion_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: red_social,
    });
});

router.post("/products/:publicacion_id", async (req, res) => {
    const dataRed_social = req.body;
    await Red_social.sync();
    const createPublicacion = await Products.create({
        publicacion_name: dataRed_social.publicacion_name,
        price: dataRed_social.price
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Publication",
    });
});

router.put("/products/:publicacion_id", async (req, res) => {
    const id=req.params.publicacion_id;
    dataRed_social=req.body;
});

router.delete("/products/:publicacion_id", async (req, res) => {
    res.send("i am");
});

module.exports=router;