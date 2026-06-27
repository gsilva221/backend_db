const router = require("express").Router();
const controller = require("../controllers/usuarioController");


router.post("/", controller.crearUsuario);

router.get("/", controller.obtenerUsuarios);

router.get("/:id", controller.obtenerUsuario);

router.put("/:id", controller.actualizarUsuario);

router.delete("/:id", controller.eliminarUsuario);

router.post("/login", controller.login);


module.exports = router;