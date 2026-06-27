const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Visita=db.define("Visita",{

id_visita:{
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


entrada:{
type:DataTypes.DATE
},


salida:{
type:DataTypes.DATE
}


});


module.exports=Visita;