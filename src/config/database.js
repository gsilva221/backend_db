const mongoose = require("mongoose");

const conectarBD = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("La variable de entorno MONGO_URI no está definida. Iniciando sin conexión a BD (solo para depuración).");
      return; // continue so server can start and respond (useful for debugging CORS / deployment)
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("🟢 Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("🔴 Error al conectar a MongoDB:", error.message);
    // Do not exit the process automatically to allow the server to run for debugging CORS or deployment issues.
    // In production, prefer exiting or handling this explicitly.
  }
};

module.exports = conectarBD;