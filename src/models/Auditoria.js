const { DataTypes } = require("sequelize");
const db = require("../config/database");


const Auditoria = db.define("Auditoria", {

    id_auditoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },


    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },


    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },


    tipo_evento: {
        type: DataTypes.ENUM(
            "novedad",
            "ingreso",
            "salida",
            "modificacion",
            "eliminacion",
            "registro"
        ),

        defaultValue: "novedad"
    },


    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },


    usuario_responsable: {
        type: DataTypes.STRING,
        allowNull: false
    },


    rol_usuario: {
        type: DataTypes.ENUM(
            "administrador",
            "guardia"
        ),

        defaultValue: "guardia"
    },


    id_novedad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },


    id_guardia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },


    estado: {
        type: DataTypes.ENUM(
            "activo",
            "cerrado"
        ),

        defaultValue: "activo"
    }

});