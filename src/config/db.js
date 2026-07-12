const mongoose = require("mongoose");
require("dotenv").config();

const conectarDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("La variable de entorno MONGO_URI no está definida");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("🟢 Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("🔴 Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;
