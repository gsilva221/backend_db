const router=require("express").Router();

const controller=require("../controllers/subcontratistaController");



router.post("/",controller.crear);


router.get("/",controller.listar);


router.delete("/:id",controller.eliminar);



module.exports=router;