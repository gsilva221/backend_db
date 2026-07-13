const Novedad = require("../models/Novedad");
const Auditoria = require("../models/Auditoria");


exports.crearNovedad = async(req,res)=>{

try{


	const novedad = await Novedad.create(req.body);

	await Auditoria.create({
		titulo: "Nueva novedad registrada",
		descripcion: novedad.descripcion,
		tipo_evento: "novedad",
		id_novedad: novedad._id,
		id_guardia: novedad.id_guardia || null,
		usuario_responsable: req.body.usuario || null,
	});

	return res.json(novedad);


}catch(error){
res.status(500).json(error);
}

};



exports.obtenerNovedades = async (req, res) => {
	try {
		const datos = await Novedad.find();
		return res.json(datos);
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al listar novedades', error: error.message });
	}
};



exports.actualizarNovedad = async (req, res) => {
	try {
		const actualizado = await Novedad.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!actualizado) return res.status(404).json({ mensaje: 'Novedad no encontrada' });
		return res.json(actualizado);
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al actualizar novedad', error: error.message });
	}
};



exports.eliminarNovedad = async (req, res) => {
	try {
		const eliminado = await Novedad.findByIdAndDelete(req.params.id);
		if (!eliminado) return res.status(404).json({ mensaje: 'Novedad no encontrada' });
		return res.json({ mensaje: 'Novedad eliminada' });
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al eliminar novedad', error: error.message });
	}
};