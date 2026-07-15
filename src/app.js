const express = require("express");
const cors = require("cors");

const app = express();

// Build allowed origins from env or fallbacks (keeps production values but allows local dev).
const defaultOrigins = [
  'https://proyecto-db-peach.vercel.app',
  'https://proyecto-52s8hfaal-gajesus2024-droids-projects.vercel.app',
];

let allowedOrigins = [...defaultOrigins];
if (process.env.CORS_ORIGIN) {
  const envOrigins = process.env.CORS_ORIGIN.split(',').map(s => s.trim()).filter(Boolean);
  allowedOrigins = Array.from(new Set([...allowedOrigins, ...envOrigins]));
} else {
  // If not provided, allow common local dev hosts used by Vite/CRA
  allowedOrigins = Array.from(new Set([...allowedOrigins, 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000', 'http://127.0.0.1:3000']));
}

const corsOptions = {
  origin: (origin, callback) => {
    // allow non-browser tools like curl (no origin)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: Origin not allowed'));
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
// Fallback: ensure preflight (OPTIONS) always returns proper headers
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || allowedOrigins.includes(origin)) {
    if (origin) res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
  }
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "API del sistema de guardias funcionando 🚀" });
});



app.use("/api/usuarios",
require("./routers/usuarioRoutes")
);


app.use("/api/guardias",
require("./routers/guardiaRoutes")
);


app.use("/api/departamentos",
require("./routers/departamentoRoutes")
);


app.use("/api/inquilinos",
require("./routers/inquilinoRoutes")
);


app.use("/api/novedades",
require("./routers/novedadRoutes")
);


app.use("/api/turnos",
require("./routers/turnoRoutes")
);


app.use("/api/empleados",
require("./routers/empleadoRoutes")
);


app.use("/api/subcontratistas",
require("./routers/subcontratistaRoutes")
);


app.use("/api/visitas",
require("./routers/visitaRoutes")
);


app.use("/api/paquetes",
require("./routers/paqueteRoutes")
);


app.use("/api/solicitudes",
require("./routers/solicitudImplementoRoutes")
);


app.use("/api/auditoria",
require("./routers/auditoriaRoutes")
);



module.exports=app;