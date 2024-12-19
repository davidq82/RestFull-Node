// controllers/tokenController.js
const jwt = require('jsonwebtoken');

const generarToken = (req, res) => {
  const payload = {
    id: 1,  // Dato de ejemplo
    nombre: 'usuario_prueba',
    rol: 'admin',
  };

  // Generar el token con el payload y la clave secreta
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({
    token,
  });
};

module.exports = { generarToken };
