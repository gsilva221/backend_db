const {DataTypes}=require("sequelize");
const db=require("../config/database");


const Departamento=db.define("Departamento",{

id_departamento:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},

numero:{
type:DataTypes.STRING,
allowNull:false
},

piso:{
type:DataTypes.INTEGER
}

});


module.exports=Departamento;