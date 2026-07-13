const Paquete=require("../models/Paquete");


exports.crearPaquete=async(req,res)=>{


res.json(
await Paquete.create(req.body)
);


};




exports.obtenerPaquetes = async (req, res) => {
	try {
		const paquetes = await Paquete.find();
		return res.json(paquetes);
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al listar paquetes', error: error.message });
	}
};




exports.actualizarPaquete = async (req, res) => {
	try {
		const actualizado = await Paquete.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!actualizado) return res.status(404).json({ mensaje: 'Paquete no encontrado' });
		return res.json(actualizado);
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al actualizar paquete', error: error.message });
	}
};




exports.eliminarPaquete = async (req, res) => {
	try {
		const eliminado = await Paquete.findByIdAndDelete(req.params.id);
		if (!eliminado) return res.status(404).json({ mensaje: 'Paquete no encontrado' });
		return res.json({ mensaje: 'Eliminado' });
	} catch (error) {
		return res.status(500).json({ mensaje: 'Error al eliminar paquete', error: error.message });
	}
};