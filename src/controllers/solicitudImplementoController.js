const Solicitud = require("../models/SolicitudImplemento");

exports.crearSolicitud = async (req, res) => {
  try {
    const solicitud = await Solicitud.create({
      implemento: req.body.implemento,
      cantidad: req.body.cantidad,
      id_guardia: req.body.id_guardia,
    });

    return res.json(solicitud);
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al crear solicitud', error: error.message });
  }
};

exports.obtenerSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.find();
    return res.json(solicitudes);
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al listar solicitudes', error: error.message });
  }
};

exports.aprobarSolicitud = async (req, res) => {
  try {
    const actualizado = await Solicitud.findByIdAndUpdate(req.params.id, { estado: 'aprobada' }, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    return res.json({ mensaje: 'Solicitud aprobada', solicitud: actualizado });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al aprobar solicitud', error: error.message });
  }
};

exports.rechazarSolicitud = async (req, res) => {
  try {
    const actualizado = await Solicitud.findByIdAndUpdate(req.params.id, { estado: 'rechazada' }, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    return res.json({ mensaje: 'Solicitud rechazada', solicitud: actualizado });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al rechazar solicitud', error: error.message });
  }
};

exports.eliminarSolicitud = async (req, res) => {
  try {
    const eliminado = await Solicitud.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    return res.json({ mensaje: 'Solicitud eliminada' });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al eliminar solicitud', error: error.message });
  }
};