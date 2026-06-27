const router=require("express").Router();

const controller=require("../controllers/turnoController");



router.post("/entrada",controller.entradaTurno);


router.put("/salida/:id",controller.salidaTurno);


router.get("/",controller.obtenerTurnos);



module.exports=router;