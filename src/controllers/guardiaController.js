const Guardia = require("../models/Guardia");

exports.crearGuardia = async (req, res) => {
  try {
    const { nombre, rut, telefono, activo } = req.body;

    if (!nombre || !rut) {
      return res.status(400).json({ mensaje: 'Nombre y RUT son obligatorios' });
    }

    // Verificar unicidad de RUT
    const existente = await Guardia.findOne({ rut });
    if (existente) {
      return res.status(400).json({ mensaje: 'Ya existe un guardia con ese RUT' });
    }

    const guardia = await Guardia.create({ nombre, rut, telefono, activo: activo !== undefined ? !!activo : true });
    return res.status(201).json(guardia);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ mensaje: 'RUT duplicado' });
    }
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
    const { nombre, rut, telefono, activo } = req.body;

    if (!nombre || !rut) {
      return res.status(400).json({ mensaje: 'Nombre y RUT son obligatorios' });
    }

    // Evitar duplicar rut en otro documento
    const existing = await Guardia.findOne({ rut, _id: { $ne: req.params.id } });
    if (existing) {
      return res.status(400).json({ mensaje: 'Otro guardia ya usa ese RUT' });
    }

    const guardia = await Guardia.findByIdAndUpdate(
      req.params.id,
      { nombre, rut, telefono, activo: !!activo },
      { new: true, runValidators: true }
    );

    if (!guardia) {
      return res.status(404).json({ mensaje: "Guardia no encontrado" });
    }

    return res.status(200).json(guardia);
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