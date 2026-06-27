const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Turno=db.define("Turno",{

id_turno:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},

entrada:{
type:DataTypes.DATE
},

salida:{
type:DataTypes.DATE
},


id_guardia:{
type:DataTypes.INTEGER
}


});


module.exports=Turno;