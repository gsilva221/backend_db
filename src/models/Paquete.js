const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Paquete=db.define("Paquete",{

id_paquete:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},


nombre:{
type:DataTypes.STRING
},


rut:{
type:DataTypes.STRING
},


departamento:{
type:DataTypes.STRING
},


estado:{
type:DataTypes.ENUM(
"recibido",
"entregado"
),

defaultValue:"recibido"

},


fecha:{
type:DataTypes.DATE,
defaultValue:DataTypes.NOW
}


});


module.exports=Paquete;