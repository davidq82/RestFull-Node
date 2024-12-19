const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');  // Conexión a la base de datos

const AuthController = {
  login: (req, res) => {
    const { usuario, password } = req.body;

    // Validar que el usuario y la contraseña sean provistos
    if (!usuario || !password) {
      return res.status(400).json({ message: 'Usuario y contraseña requeridos.' });
    }

    // Consulta del usuario en la base de datos
    const query = 'CALL ObtenerUsuarioPorNombre(?)';  // Asegúrate de que el SP existe
    db.query(query, [usuario], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error en el servidor.' });
      }

      if (results.length === 0 || results[0].length === 0) {
        return res.status(401).json({ message: 'Usuario no encontrado.' });
      }

      const user = results[0][0];

      // Verificar la contraseña con bcrypt
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ message: 'Error en la verificación de la contraseña.' });
        }

        if (!isMatch) {
          return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        // Generar el token JWT
        const token = jwt.sign(
          { id: user.id, perfil: user.perfil },  // Payload del token
          process.env.JWT_SECRET,               // Clave secreta de JWT (debe estar en tu archivo .env)
          { expiresIn: '1h' }                   // Expiración del token
        );

        // Devolver el token y el usuario
        res.json({
          message: 'Login exitoso.',
          token,
          user: {
            id: user.id,
            usuario: user.usuario,
            perfil: user.perfil,
          }
        });
      });
    });
  }
};

module.exports = AuthController;
