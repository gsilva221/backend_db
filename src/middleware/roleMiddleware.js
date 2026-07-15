module.exports = (requiredRole) => {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ mensaje: 'No autenticado' });
    }
    const userRole = req.usuario.rol || req.usuario.role || req.usuario.rol_usuario;
    if (!userRole) {
      return res.status(403).json({ mensaje: 'Rol de usuario no encontrado' });
    }
    if (userRole !== requiredRole) {
      return res.status(403).json({ mensaje: 'Acceso denegado: se requiere rol ' + requiredRole });
    }
    next();
  };
};
