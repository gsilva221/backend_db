const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const InquilinoSchema = buildSchema({
  nombre: { type: String, required: true },
  rut: { type: String, unique: true },
  telefono: { type: String },
  id_departamento: { type: String },
});

module.exports = mongoose.model("Inquilino", InquilinoSchema);