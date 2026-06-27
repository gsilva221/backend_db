const Guardia=require("../models/Guardia");


exports.crearGuardia=async(req,res)=>{

const guardia=await Guardia.create(req.body);

res.json(guardia);

};



exports.obtenerGuardias=async(req,res)=>{

const guardias=await Guardia.findAll();

res.json(guardias);

};



exports.actualizarGuardia=async(req,res)=>{


await Guardia.update(
req.body,
{
where:{
id_guardia:req.params.id
}
});


res.json({
mensaje:"Guardia actualizado"
});


};



exports.eliminarGuardia=async(req,res)=>{


await Guardia.destroy({
where:{
id_guardia:req.params.id
}
});


res.json({
mensaje:"Guardia eliminado"
});


};