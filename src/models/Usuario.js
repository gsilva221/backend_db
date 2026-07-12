const mongoose = require("mongoose");
const buildSchema = require("./baseModel");

const UsuarioSchema = buildSchema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  rol: {
    type: String,
    enum: ["administrador", "guardia"],
    default: "guardia",
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);