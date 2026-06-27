const express=require("express");

const app=express();


app.use(express.json());



app.use("/api/usuarios",
require("./routes/usuarioRoutes")
);


app.use("/api/guardias",
require("./routes/guardiaRoutes")
);


app.use("/api/departamentos",
require("./routes/departamentoRoutes")
);


app.use("/api/inquilinos",
require("./routes/inquilinoRoutes")
);


app.use("/api/novedades",
require("./routes/novedadRoutes")
);


app.use("/api/turnos",
require("./routes/turnoRoutes")
);


app.use("/api/empleados",
require("./routes/empleadoRoutes")
);


app.use("/api/subcontratistas",
require("./routes/subcontratistaRoutes")
);


app.use("/api/visitas",
require("./routes/visitaRoutes")
);


app.use("/api/paquetes",
require("./routes/paqueteRoutes")
);


app.use("/api/solicitudes",
require("./routes/solicitudRoutes")
);


app.use("/api/auditoria",
require("./routes/auditoriaRoutes")
);



module.exports=app;