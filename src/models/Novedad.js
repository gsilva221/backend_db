const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const NovedadSchema = buildSchema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  fecha: { type: Date, default: Date.now },
  estado: { type: String, enum: ["pendiente", "resuelto"], default: "pendiente" },
  id_guardia: { type: String },
});

module.exports = mongoose.model("Novedad", NovedadSchema);