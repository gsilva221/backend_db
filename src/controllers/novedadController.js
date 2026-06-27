const Novedad = require("../models/Novedad");
const Auditoria = require("../models/Auditoria");


exports.crearNovedad = async(req,res)=>{

try{

const novedad = await Novedad.create(req.body);


await Auditoria.create({
titulo:"Nueva novedad registrada",
descripcion:novedad.descripcion,
tipo_evento:"novedad",
id_novedad:novedad.id_novedad,
id_guardia:novedad.id_guardia,
usuario_responsable:req.body.usuario
});


res.json(novedad);


}catch(error){
res.status(500).json(error);
}

};



exports.obtenerNovedades = async(req,res)=>{

const datos = await Novedad.findAll();

res.json(datos);

};



exports.actualizarNovedad = async(req,res)=>{


await Novedad.update(
req.body,
{
where:{
id_novedad:req.params.id
}
});


res.json({
mensaje:"Novedad modificada"
});

};



exports.eliminarNovedad = async(req,res)=>{


await Novedad.destroy({
where:{
id_novedad:req.params.id
}
});


res.json({
mensaje:"Novedad eliminada"
});


};