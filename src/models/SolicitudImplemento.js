const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Solicitud=db.define("Solicitud",{


id_solicitud:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},


implemento:{
type:DataTypes.STRING
},


cantidad:{
type:DataTypes.INTEGER
},


estado:{
type:DataTypes.ENUM(
"pendiente",
"aprobada",
"rechazada"
),

defaultValue:"pendiente"

},


id_guardia:{
type:DataTypes.INTEGER
}


});


module.exports=Solicitud;