const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Subcontratista=db.define("Subcontratista",{

id_subcontratista:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},

nombre:{
type:DataTypes.STRING
},

empresa:{
type:DataTypes.STRING
},

rut:{
type:DataTypes.STRING
},

servicio:{
type:DataTypes.STRING
}

});


module.exports=Subcontratista;