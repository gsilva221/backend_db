const Departamento = require("../models/Departamento");


exports.crearDepartamento = async(req,res)=>{

try{

const departamento = await Departamento.create(req.body);

res.json(departamento);


}catch(error){

res.status(500).json({
error:"Error al crear departamento"
});

}

};



exports.obtenerDepartamentos = async(req,res)=>{


try{


const departamentos = await Departamento.findAll();


res.json(departamentos);


}catch(error){

res.status(500).json(error);

}

};



exports.obtenerDepartamento = async(req,res)=>{


const departamento = await Departamento.findByPk(
req.params.id
);


if(!departamento){

return res.status(404).json({
mensaje:"Departamento no encontrado"
});

}


res.json(departamento);


};




exports.actualizarDepartamento = async(req,res)=>{


await Departamento.update(

req.body,

{
where:{
id_departamento:req.params.id
}
}

);


res.json({
mensaje:"Departamento actualizado"
});


};




exports.eliminarDepartamento = async(req,res)=>{


await Departamento.destroy({

where:{
id_departamento:req.params.id
}

});


res.json({
mensaje:"Departamento eliminado"
});


};