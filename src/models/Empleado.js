const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const EmpleadoSchema = buildSchema({
  nombre: { type: String },
  rut: { type: String },
  cargo: { type: String },
  empresa: { type: String },
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);