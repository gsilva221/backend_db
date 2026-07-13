const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const VisitaSchema = buildSchema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  rut: {
    type: String,
    required: [true, "El RUT/DNI es obligatorio"],
  },
  departamento: {
    type: String,
    required: [true, "El departamento es obligatorio"],
  },
  motivo: {
    type: String,
    required: [true, "El motivo es obligatorio"],
  },
  entrada: {
    type: Date,
    default: Date.now,
  },
  salida: {
    type: Date,
    default: null,
  },
  estado: {
    type: String,
    enum: ["Dentro", "Fuera"],
    default: "Dentro",
  },
});

module.exports = mongoose.model("Visita", VisitaSchema);