const Auditoria = require("../models/Auditoria");

exports.obtenerAuditoria = async (req, res) => {
	try {
		const informe = await Auditoria.find().sort({ fecha: -1 });
		return res.json(informe);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error al listar auditoria", error: error.message });
	}
};

exports.crearRegistro = async (req, res) => {
	try {
		const registro = await Auditoria.create(req.body);
		return res.json(registro);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error al crear registro de auditoria", error: error.message });
	}
};

exports.buscarPorFecha = async (req, res) => {
	try {
		const datos = await Auditoria.find({ fecha: req.params.fecha });
		return res.json(datos);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error al buscar auditoria por fecha", error: error.message });
	}
};