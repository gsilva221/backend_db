const Subcontratista = require("../models/Subcontratista");

exports.crear = async (req, res) => {
  try {
    const subcontratista = await Subcontratista.create(req.body);
    return res.status(201).json(subcontratista);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al crear subcontratista", error: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const subcontratistas = await Subcontratista.find().sort({ createdAt: -1 });
    return res.status(200).json(subcontratistas);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al listar subcontratistas", error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const subcontratista = await Subcontratista.findByIdAndDelete(req.params.id);
    if (!subcontratista) {
      return res.status(404).json({ mensaje: "Subcontratista no encontrado" });
    }

    return res.status(200).json({ mensaje: "Eliminado" });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar subcontratista", error: error.message });
  }
};