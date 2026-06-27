const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Empleado=db.define("Empleado",{

id_empleado:{
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

cargo:{
type:DataTypes.STRING
},

empresa:{
type:DataTypes.STRING
}

});


module.exports=Empleado;