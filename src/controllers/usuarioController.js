const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, password, rol } = req.body;

    if (!nombre || !correo || !password) {
      return res.status(400).json({ mensaje: "Nombre, correo y contraseña son obligatorios" });
    }

    const passwordEncriptada = await bcrypt.hash(password, 10);
    const usuario = await Usuario.create({
      nombre,
      correo,
      password: passwordEncriptada,
      rol: rol || "guardia",
    });

    return res.status(201).json({ mensaje: "Usuario creado correctamente", usuario });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al crear usuario", error: error.message });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select("-password");
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al listar usuarios", error: error.message });
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id).select("-password");
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al buscar usuario", error: error.message });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const datos = { ...req.body };

    if (datos.password) {
      datos.password = await bcrypt.hash(datos.password, 10);
    }

    const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, datos, { new: true });
    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    return res.status(200).json({ mensaje: "Usuario actualizado", usuario: usuarioActualizado });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al actualizar usuario", error: error.message });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    return res.status(200).json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar usuario", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    if (!correo || !password) {
      return res.status(400).json({ mensaje: "Correo y contraseña son obligatorios" });
    }

    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no existe" });
    }

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, jwtConfig.secret, { expiresIn: "8h" });

    return res.status(200).json({
      mensaje: "Login correcto",
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al iniciar sesión", error: error.message });
  }
};