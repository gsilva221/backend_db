const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Inquilino=db.define("Inquilino",{

id_inquilino:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},

nombre:{
type:DataTypes.STRING,
allowNull:false
},

rut:{
type:DataTypes.STRING,
unique:true
},

telefono:{
type:DataTypes.STRING
},


id_departamento:{
type:DataTypes.INTEGER
}


});


module.exports=Inquilino;