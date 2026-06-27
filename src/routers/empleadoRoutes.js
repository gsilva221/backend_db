const router=require("express").Router();

const controller=require("../controllers/empleadoController");


router.post("/",controller.crear);


router.get("/",controller.listar);


router.delete("/:id",controller.eliminar);



module.exports=router;