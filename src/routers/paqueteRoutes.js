const router=require("express").Router();

const controller=require("../controllers/paqueteController");



router.post("/",controller.crearPaquete);


router.get("/",controller.obtenerPaquetes);


router.put("/:id",controller.actualizarPaquete);


router.delete("/:id",controller.eliminarPaquete);



module.exports=router;