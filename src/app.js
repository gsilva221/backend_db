const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all routes. Keep this first so preflight requests are handled.
app.use(cors());
// Fallback: ensure preflight (OPTIONS) always returns proper headers even if other middleware errors.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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