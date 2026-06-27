const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Novedad=db.define("Novedad",{

id_novedad:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},

titulo:{
type:DataTypes.STRING,
allowNull:false
},

descripcion:{
type:DataTypes.TEXT
},

fecha:{
type:DataTypes.DATE,
defaultValue:DataTypes.NOW
},

estado:{
type:DataTypes.ENUM(
"pendiente",
"resuelto"
),
defaultValue:"pendiente"
},

id_guardia:{
type:DataTypes.INTEGER
}


});


module.exports=Novedad;