const Inquilino = require("../models/Inquilino");

exports.crearInquilino = async (req, res) => {
  try {
    const data = await Inquilino.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al crear inquilino", error: error.message });
  }
};



exports.obtenerInquilinos = async (req, res) => {
  try {
    const inquilinos = await Inquilino.find().sort({ createdAt: -1 });
    return res.status(200).json(inquilinos);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al listar inquilinos", error: error.message });
  }
};



exports.actualizarInquilino = async (req, res) => {
  try {
    const inquilino = await Inquilino.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inquilino) {
      return res.status(404).json({ mensaje: "Inquilino no encontrado" });
    }

    return res.status(200).json({ mensaje: "Actualizado", inquilino });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al actualizar inquilino", error: error.message });
  }
};

exports.eliminarInquilino = async (req, res) => {
  try {
    const inquilino = await Inquilino.findByIdAndDelete(req.params.id);
    if (!inquilino) {
      return res.status(404).json({ mensaje: "Inquilino no encontrado" });
    }

    return res.status(200).json({ mensaje: "Inquilino eliminado" });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar inquilino", error: error.message });
  }
};