const Visita=require("../models/Visita");


exports.registrarVisita=async(req,res)=>{


const visita=await Visita.create({

...req.body,

entrada:new Date()

});


res.json(visita);

};



exports.salirVisita=async(req,res)=>{


await Visita.update(
{
salida:new Date()
},
{
where:{
id_visita:req.params.id
}
});


res.json({
mensaje:"Salida registrada"
});


};



exports.obtenerVisitas=async(req,res)=>{


res.json(
await Visita.findAll()
);


};