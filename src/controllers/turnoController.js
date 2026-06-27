const Turno=require("../models/Turno");


exports.entradaTurno=async(req,res)=>{


const turno=await Turno.create({

entrada:new Date(),

id_guardia:req.body.id_guardia

});


res.json(turno);

};



exports.salidaTurno=async(req,res)=>{


await Turno.update(
{
salida:new Date()
},
{
where:{
id_turno:req.params.id
}
});


res.json({
mensaje:"Turno cerrado"
});


};



exports.obtenerTurnos=async(req,res)=>{

res.json(
await Turno.findAll()
);

};