const Departamento = require("../models/Departamento");

exports.crearDepartamento = async (req, res) => {
  try {
    const departamento = await Departamento.create(req.body);
    return res.status(201).json(departamento);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al crear departamento", error: error.message });
  }
};



exports.obtenerDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.find().sort({ createdAt: -1 });
    return res.status(200).json(departamentos);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al listar departamentos", error: error.message });
  }
};



exports.obtenerDepartamento = async (req, res) => {
  try {
    const departamento = await Departamento.findById(req.params.id);
    if (!departamento) {
      return res.status(404).json({ mensaje: "Departamento no encontrado" });
    }

    return res.status(200).json(departamento);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al buscar departamento", error: error.message });
  }
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