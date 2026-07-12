const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const VisitaSchema = buildSchema({
  nombre: { type: String },
  rut: { type: String },
  departamento: { type: String },
  entrada: { type: Date },
  salida: { type: Date },
});

module.exports = mongoose.model("Visita", VisitaSchema);