const Auditoria=require("../models/Auditoria");


exports.obtenerAuditoria=async(req,res)=>{


const informe=await Auditoria.findAll({
order:[
["fecha","DESC"]
]
});


res.json(informe);

};



exports.crearRegistro=async(req,res)=>{


const registro=await Auditoria.create(req.body);


res.json(registro);


};



exports.buscarPorFecha=async(req,res)=>{


const datos=await Auditoria.findAll({

where:{
fecha:req.params.fecha
}

});


res.json(datos);


};