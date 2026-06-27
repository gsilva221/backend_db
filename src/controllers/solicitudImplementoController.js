const Solicitud = require("../models/Solicitud");



exports.crearSolicitud = async(req,res)=>{


try{


const solicitud = await Solicitud.create({

implemento:req.body.implemento,

cantidad:req.body.cantidad,

id_guardia:req.body.id_guardia

});


res.json(solicitud);



}catch(error){


res.status(500).json(error);


}


};





exports.obtenerSolicitudes = async(req,res)=>{


const solicitudes = await Solicitud.findAll();


res.json(solicitudes);


};





exports.aprobarSolicitud = async(req,res)=>{


await Solicitud.update(

{
estado:"aprobada"
},

{
where:{
id_solicitud:req.params.id
}
}


);



res.json({
mensaje:"Solicitud aprobada"
});


};





exports.rechazarSolicitud = async(req,res)=>{


await Solicitud.update(

{
estado:"rechazada"
},

{
where:{
id_solicitud:req.params.id
}
}

);



res.json({
mensaje:"Solicitud rechazada"
});


};





exports.eliminarSolicitud = async(req,res)=>{


await Solicitud.destroy({

where:{
id_solicitud:req.params.id
}

});



res.json({
mensaje:"Solicitud eliminada"
});


};