const router=require("express").Router();

const controller = require("../controllers/departamentoController");
const auth = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");


// Crear departamento: solo administradores autenticados
router.post("/", auth, requireRole('administrador'), controller.crearDepartamento);

// Listar departamentos: accesible públicamente (o por conserjes autenticados)
router.get("/", controller.obtenerDepartamentos);

// Obtener por id
router.get("/:id", controller.obtenerDepartamento);

// Actualizar y eliminar: solo administradores
router.put("/:id", auth, requireRole('administrador'), controller.actualizarDepartamento);
router.delete("/:id", auth, requireRole('administrador'), controller.eliminarDepartamento);

module.exports = router;