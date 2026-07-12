const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const SolicitudSchema = buildSchema({
  implemento: { type: String },
  cantidad: { type: Number },
  estado: { type: String, enum: ["pendiente", "aprobada", "rechazada"], default: "pendiente" },
  id_guardia: { type: String },
});

module.exports = mongoose.model("SolicitudImplemento", SolicitudSchema);