const Empleado = require("../models/Empleado");

exports.crear = async (req, res) => {
  try {
    const empleado = await Empleado.create(req.body);
    return res.status(201).json(empleado);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al crear empleado", error: error.message });
  }
};



exports.listar = async (req, res) => {
  try {
    const empleados = await Empleado.find().sort({ createdAt: -1 });
    return res.status(200).json(empleados);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al listar empleados", error: error.message });
  }
};



exports.eliminar = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }

    return res.status(200).json({ mensaje: "Eliminado" });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar empleado", error: error.message });
  }
};