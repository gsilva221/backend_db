const router = require("express").Router();

const controller = require("../controllers/guardiaController");
const auth = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");


// Crear guardia: sólo administradores autenticados
router.post("/", auth, requireRole('administrador'), controller.crearGuardia);

// Listar guardias: público (puede ajustarse a auth si se desea)
router.get("/", controller.obtenerGuardias);

// Actualizar / Eliminar: administradores
router.put("/:id", auth, requireRole('administrador'), controller.actualizarGuardia);
router.delete("/:id", auth, requireRole('administrador'), controller.eliminarGuardia);

module.exports = router;