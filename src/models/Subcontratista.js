const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const SubcontratistaSchema = buildSchema({
  nombre: { type: String },
  empresa: { type: String },
  rut: { type: String },
  servicio: { type: String },
});

module.exports = mongoose.model("Subcontratista", SubcontratistaSchema);