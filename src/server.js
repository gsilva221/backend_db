const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();
const conectarDB = require("./config/db");
const app = require("./app");

const port = process.env.PORT || 3000;

const startServer = async () => {
  await conectarDB();

  app.listen(port, () => {
    console.log(`🟡 Servidor corriendo en http://localhost:${port}`);
  });
};

startServer();
