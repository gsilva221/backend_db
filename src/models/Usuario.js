const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Usuario = db.define("Usuario", {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    rol: {
        type: DataTypes.ENUM(
            "administrador",
            "guardia"
        ),
        defaultValue: "guardia"
    }
});

module.exports = Usuario;