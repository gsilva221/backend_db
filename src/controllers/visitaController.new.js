const Visita = require("../models/Visita");

exports.obtenerVisitas = async (req, res) => {
  try {
    const visitas = await Visita.find().sort({ entrada: -1 });
    return res.status(200).json(visitas);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al listar visitas", error: error.message });
  }
};

exports.registrarVisita = async (req, res) => {
  try {
    const { nombre, rut, departamento, motivo } = req.body;

    if (!nombre || !rut || !departamento || !motivo) {
      return res.status(400).json({ mensaje: "Nombre, RUT, departamento y motivo son obligatorios" });
    }

    const visita = await Visita.create({
      nombre,
      rut,
      departamento,
      motivo,
      entrada: new Date(),
      salida: null,
      estado: "Dentro",
    });

    return res.status(201).json(visita);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al registrar visita", error: error.message });
  }
};

exports.actualizarVisita = async (req, res) => {
  try {
    const visitaActualizada = await Visita.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!visitaActualizada) {
      return res.status(404).json({ mensaje: "Visita no encontrada" });
    }

    return res.status(200).json(visitaActualizada);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al actualizar visita", error: error.message });
  }
};

exports.marcarSalida = async (req, res) => {
  try {
    const visita = await Visita.findById(req.params.id);

    if (!visita) {
      return res.status(404).json({ mensaje: "Visita no encontrada" });
    }

    visita.salida = new Date();
    visita.estado = "Fuera";
    await visita.save();

    return res.status(200).json(visita);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al marcar salida", error: error.message });
  }
};

exports.eliminarVisita = async (req, res) => {
  try {
    const visitaEliminada = await Visita.findByIdAndDelete(req.params.id);

    if (!visitaEliminada) {
      return res.status(404).json({ mensaje: "Visita no encontrada" });
    }

    return res.status(200).json({ mensaje: "Visita eliminada correctamente" });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar visita", error: error.message });
  }
};
