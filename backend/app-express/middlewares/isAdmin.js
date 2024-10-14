const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).send({ error: 'Acceso denegado. Se requieren permisos de administrador.' });
    }
  };
  
  module.exports = isAdmin;