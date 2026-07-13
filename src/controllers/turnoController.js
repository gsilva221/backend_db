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



exports.salidaTurno = async (req, res) => {
	try {
		const actualizado = await Turno.findByIdAndUpdate(req.params.id, { salida: new Date() }, { new: true });
		if (!actualizado) return res.status(404).json({ mensaje: 'Turno no encontrado' });
		return res.json({ mensaje: 'Turno cerrado', turno: actualizado });
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al cerrar turno', error: error.message });
	}
};


exports.obtenerTurnos = async (req, res) => {
	try {
		const turnos = await Turno.find();
		return res.json(turnos);
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al listar turnos', error: error.message });
	}
};