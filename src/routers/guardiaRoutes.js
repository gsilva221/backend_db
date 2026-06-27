const router=require("express").Router();

const controller=require("../controllers/guardiaController");


router.post("/",controller.crearGuardia);

router.get("/",controller.obtenerGuardias);

router.put("/:id",controller.actualizarGuardia);

router.delete("/:id",controller.eliminarGuardia);


module.exports=router;