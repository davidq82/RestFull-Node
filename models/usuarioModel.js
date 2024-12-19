const db = require('../config/db');  // Importa la conexión a la base de datos
const bcrypt = require('bcryptjs');  // Importa bcrypt para encriptar la contraseña

const Usuario = {
  // Obtener todos los usuarios
  getAll: (callback) => {
    const query = 'CALL listar_usuarios()'; // Procedimiento almacenado
    db.query(query, callback);
  },


  // Crear un usuario
  create: (usuario, password, nombre, perfil, estado, callback) => {
    // Encriptar la contraseña
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return callback(err);
      }
      // Una vez encriptada la contraseña, realiza la inserción
      const query = 'CALL insertar_usuario(?, ?, ?, ?, ?)'; // Procedimiento almacenado
      db.query(query, [usuario, hashedPassword, nombre, perfil, estado], callback);
    });
  },

  // Actualizar un usuario
  update: (id, usuario, password, nombre, perfil, estado, callback) => {
    // Encriptar la contraseña antes de actualizar
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return callback(err);
      }
      const query = 'CALL ActualizarUsuario(?, ?, ?, ?, ? ,?)'; // Procedimiento almacenado
      db.query(query, [id, usuario, hashedPassword, nombre, perfil, estado], callback);
    });
  },

  // Eliminar un usuario
  delete: (id, callback) => {
    const query = 'CALL eliminar_usuario(?)'; // Procedimiento almacenado
    db.query(query, [id], callback);
  }
};

module.exports = Usuario;
