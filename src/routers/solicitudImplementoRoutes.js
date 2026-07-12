const router=require("express").Router();

const controller=require("../controllers/solicitudImplementoController");



router.post("/",controller.crearSolicitud);


router.get("/",controller.obtenerSolicitudes);


router.put("/aprobar/:id",controller.aprobarSolicitud);


router.put("/rechazar/:id",controller.rechazarSolicitud);


router.delete("/:id",controller.eliminarSolicitud);



module.exports=router;