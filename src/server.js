const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 1. Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 ¡Conexión exitosa a MongoDB Atlas!'))
  .catch((error) => console.error('🔴 Error conectando a MongoDB:', error));

// 2. Definimos cómo se guardará una Visita en la base de datos (Esquema/Modelo)
const visitSchema = new mongoose.Schema({
  nombreVisitante: { type: String, required: true },
  rutVisitante: { type: String, required: true },
  departamento: { type: String, required: true },
  motivo: { type: String },
  fechaEntrada: { type: Date, default: Date.now }
});

const Visita = mongoose.model('Visita', visitSchema);

// 3. RUTAS DE LA API (Endpoints)

// Ruta de prueba base
app.get('/', (req, res) => {
  res.send('API del sistema de guardias funcionando 🚀');
});

// Ruta para GUARDAR una nueva visita (POST)
app.post('/api/visitas', async (req, res) => {
  try {
    const nuevaVisita = new Visita(req.body);
    const visitaGuardada = await nuevaVisita.save();
    res.status(201).json(visitaGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al guardar la visita', error });
  }
});

// Ruta para VER todas las visitas (GET)
app.get('/api/visitas', async (req, res) => {
  try {
    const visitas = await Visita.find().sort({ fechaEntrada: -1 }); // Ordena de más nueva a más antigua
    res.status(200).json(visitas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las visitas', error });
  }
});

// 4. Encender el servidor
app.listen(port, () => {
  console.log(`🟡 Servidor corriendo en http://localhost:${port}`);
});