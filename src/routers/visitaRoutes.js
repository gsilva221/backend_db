const router = require("express").Router();
const controller = require("../controllers/visitaController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, controller.obtenerVisitas);
router.post("/", auth, controller.registrarVisita);
router.put("/:id/salida", auth, controller.marcarSalida);
router.put("/:id", auth, controller.actualizarVisita);
router.delete("/:id", auth, controller.eliminarVisita);

module.exports = router;
