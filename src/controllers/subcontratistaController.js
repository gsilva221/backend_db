const Sub=require("../models/Subcontratista");


exports.crear=async(req,res)=>{

res.json(
await Sub.create(req.body)
);

};


exports.listar=async(req,res)=>{

res.json(
await Sub.findAll()
);

};


exports.eliminar=async(req,res)=>{


await Sub.destroy({
where:{
id_subcontratista:req.params.id
}
});


res.json({
mensaje:"Eliminado"
});

};