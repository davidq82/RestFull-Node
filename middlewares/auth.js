// middlewares/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.usuario = decoded; // Añadimos los datos del usuario al request
    next(); // Continua al siguiente middleware o controlador
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
