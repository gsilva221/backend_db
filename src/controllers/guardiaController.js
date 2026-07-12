const Guardia = require("../models/Guardia");

exports.crearGuardia = async (req, res) => {
  try {
    const guardia = await Guardia.create(req.body);
    return res.status(201).json(guardia);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al crear guardia", error: error.message });
  }
};



exports.obtenerGuardias = async (req, res) => {
  try {
    const guardias = await Guardia.find().sort({ createdAt: -1 });
    return res.status(200).json(guardias);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al listar guardias", error: error.message });
  }
};



exports.actualizarGuardia = async (req, res) => {
  try {
    const guardia = await Guardia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!guardia) {
      return res.status(404).json({ mensaje: "Guardia no encontrado" });
    }

    return res.status(200).json({ mensaje: "Guardia actualizado", guardia });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al actualizar guardia", error: error.message });
  }
};



exports.eliminarGuardia = async (req, res) => {
  try {
    const guardia = await Guardia.findByIdAndDelete(req.params.id);
    if (!guardia) {
      return res.status(404).json({ mensaje: "Guardia no encontrado" });
    }

    return res.status(200).json({ mensaje: "Guardia eliminado" });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar guardia", error: error.message });
  }
};