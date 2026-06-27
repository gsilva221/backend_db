const router=require("express").Router();

const controller=require("../controllers/inquilinoController");


router.post("/",controller.crearInquilino);


router.get("/",controller.obtenerInquilinos);


router.put("/:id",controller.actualizarInquilino);


router.delete("/:id",controller.eliminarInquilino);



module.exports=router;