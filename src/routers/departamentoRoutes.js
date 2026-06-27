const router=require("express").Router();

const controller=require("../controllers/departamentoController");


router.post("/",controller.crearDepartamento);


router.get("/",controller.obtenerDepartamentos);


router.get("/:id",controller.obtenerDepartamento);


router.put("/:id",controller.actualizarDepartamento);


router.delete("/:id",controller.eliminarDepartamento);



module.exports=router;