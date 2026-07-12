const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const AuditoriaSchema = buildSchema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  tipo_evento: { type: String, enum: ["novedad", "ingreso", "salida", "modificacion", "eliminacion", "registro"], default: "novedad" },
  fecha: { type: Date, default: Date.now },
  usuario_responsable: { type: String, required: true },
  rol_usuario: { type: String, enum: ["administrador", "guardia"], default: "guardia" },
  id_novedad: { type: String },
  id_guardia: { type: String },
  estado: { type: String, enum: ["activo", "cerrado"], default: "activo" },
});

module.exports = mongoose.model("Auditoria", AuditoriaSchema);