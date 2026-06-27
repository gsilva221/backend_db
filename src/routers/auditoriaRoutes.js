const router=require("express").Router();

const controller=require("../controllers/auditoriaController");



router.get("/",controller.obtenerAuditoria);


router.post("/",controller.crearRegistro);


router.get("/fecha/:fecha",controller.buscarPorFecha);



module.exports=router;