const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const TurnoSchema = buildSchema({
  entrada: { type: Date },
  salida: { type: Date },
  id_guardia: { type: String },
});

module.exports = mongoose.model("Turno", TurnoSchema);