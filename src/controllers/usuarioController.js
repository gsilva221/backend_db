const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");





exports.crearUsuario = async(req,res)=>{


try{


const passwordEncriptada =
await bcrypt.hash(req.body.password,10);



const usuario = await Usuario.create({

nombre:req.body.nombre,

correo:req.body.correo,

password:passwordEncriptada,

rol:req.body.rol


});



res.json(usuario);



}catch(error){


res.status(500).json(error);


}



};







exports.obtenerUsuarios = async(req,res)=>{


const usuarios = await Usuario.findAll({

attributes:{
exclude:["password"]
}

});


res.json(usuarios);


};








exports.obtenerUsuario = async(req,res)=>{


const usuario = await Usuario.findByPk(
req.params.id,
{
attributes:{
exclude:["password"]
}
}
);



if(!usuario){

return res.status(404).json({
mensaje:"Usuario no encontrado"
});

}



res.json(usuario);


};









exports.actualizarUsuario = async(req,res)=>{


let datos=req.body;



if(datos.password){


datos.password =
await bcrypt.hash(
datos.password,
10
);


}





await Usuario.update(

datos,

{
where:{
id_usuario:req.params.id
}
}

);



res.json({

mensaje:"Usuario actualizado"

});



};









exports.eliminarUsuario = async(req,res)=>{


await Usuario.destroy({

where:{
id_usuario:req.params.id
}

});



res.json({

mensaje:"Usuario eliminado"

});


};









exports.login = async(req,res)=>{


const usuario = await Usuario.findOne({

where:{
correo:req.body.correo
}

});



if(!usuario){

return res.status(404).json({

mensaje:"Usuario no existe"

});

}



const valido =
await bcrypt.compare(
req.body.password,
usuario.password
);




if(!valido){

return res.status(401).json({

mensaje:"Contraseña incorrecta"

});

}





const token = jwt.sign(
    {
        id: usuario.id_usuario,
        rol: usuario.rol
    },
    jwtConfig.secret,
    {
        expiresIn: "8h"
    }
);

res.json({

mensaje:"Login correcto",

token,

usuario:{

id:usuario.id_usuario,

nombre:usuario.nombre,

correo:usuario.correo,

rol:usuario.rol

}


});



};