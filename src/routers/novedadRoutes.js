const router=require("express").Router();

const controller=require("../controllers/novedadController");



router.post("/",controller.crearNovedad);


router.get("/",controller.obtenerNovedades);


router.put("/:id",controller.actualizarNovedad);


router.delete("/:id",controller.eliminarNovedad);



module.exports=router;