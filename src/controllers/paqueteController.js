const Paquete=require("../models/Paquete");


exports.crearPaquete=async(req,res)=>{


res.json(
await Paquete.create(req.body)
);


};



exports.obtenerPaquetes=async(req,res)=>{


res.json(
await Paquete.findAll()
);


};



exports.actualizarPaquete=async(req,res)=>{


await Paquete.update(
req.body,
{
where:{
id_paquete:req.params.id
}
});


res.json({
mensaje:"Paquete actualizado"
});

};



exports.eliminarPaquete=async(req,res)=>{


await Paquete.destroy({
where:{
id_paquete:req.params.id
}
});


res.json({
mensaje:"Eliminado"
});

};