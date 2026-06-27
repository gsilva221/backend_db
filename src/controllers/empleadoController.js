const Empleado=require("../models/Empleado");


exports.crear=async(req,res)=>{

res.json(
await Empleado.create(req.body)
);

};



exports.listar=async(req,res)=>{

res.json(
await Empleado.findAll()
);

};



exports.eliminar=async(req,res)=>{

await Empleado.destroy({
where:{
id_empleado:req.params.id
}
});


res.json({
mensaje:"Eliminado"
});

};