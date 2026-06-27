const Inquilino=require("../models/Inquilino");


exports.crearInquilino=async(req,res)=>{

const data=await Inquilino.create(req.body);

res.json(data);

};



exports.obtenerInquilinos=async(req,res)=>{

res.json(
await Inquilino.findAll()
);

};



exports.actualizarInquilino=async(req,res)=>{


await Inquilino.update(
req.body,
{
where:{
id_inquilino:req.params.id
}
});


res.json({
mensaje:"Actualizado"
});

};