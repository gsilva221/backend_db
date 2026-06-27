const { DataTypes } = require("sequelize");
const db = require("../config/database");


const Guardia = db.define("Guardia", {

    id_guardia:{
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

    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }

});


module.exports = Guardia;