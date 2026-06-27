const router=require("express").Router();

const controller=require("../controllers/visitaController");



router.post("/",controller.registrarVisita);


router.put("/salida/:id",controller.salirVisita);


router.get("/",controller.obtenerVisitas);



module.exports=router;