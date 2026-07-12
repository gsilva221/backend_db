const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const PaqueteSchema = buildSchema({
  nombre: { type: String },
  rut: { type: String },
  departamento: { type: String },
  estado: { type: String, enum: ["recibido", "entregado"], default: "recibido" },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Paquete", PaqueteSchema);