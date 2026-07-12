const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const GuardiaSchema = buildSchema({
  nombre: { type: String, required: true },
  rut: { type: String, unique: true },
  telefono: { type: String },
  activo: { type: Boolean, default: true },
});

module.exports = mongoose.model("Guardia", GuardiaSchema);