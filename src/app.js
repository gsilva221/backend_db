const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  'https://proyecto-db-peach.vercel.app',
  'https://proyecto-rhjgt98lv-gajesus2024-droids-projects.vercel.app',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: Origin not allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  credentials: true,
};

// Enable CORS for all routes using the allowed frontend origin.
app.use(cors(corsOptions));
// Fallback: ensure preflight (OPTIONS) always returns proper headers even if other middleware errors.
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
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