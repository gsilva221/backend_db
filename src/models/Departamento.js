const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const DepartamentoSchema = buildSchema({
  numero: { type: String, required: true },
  piso: { type: Number },
});

module.exports = mongoose.model("Departamento", DepartamentoSchema);