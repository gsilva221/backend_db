const router = require("express").Router();
const controller = require("../controllers/usuarioController");
const auth = require("../middleware/authMiddleware");

router.post("/login", controller.login);
router.post("/", controller.crearUsuario);
router.get("/", auth, controller.obtenerUsuarios);
router.get("/:id", auth, controller.obtenerUsuario);
router.put("/:id", auth, controller.actualizarUsuario);
router.delete("/:id", auth, controller.eliminarUsuario);


module.exports = router;