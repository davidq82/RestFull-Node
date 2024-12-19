const Usuario = require('../models/usuarioModel');


// Obtener todos los usuarios
exports.getUsuarios = (req, res) => {
  Usuario.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results[0]);
  });
};

// Obtener un usuario por ID
exports.getUsuarioById = (req, res) => {
  const id = req.params.id;
  Usuario.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result[0]);
  });
};

// Crear un nuevo usuario
exports.createUsuario = (req, res) => {
  const { usuario, password, nombre, perfil, estado } = req.body;
  Usuario.create(usuario, password, nombre, perfil, estado, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Usuario creado', result });
  });
};

// Actualizar un usuario
exports.updateUsuario = (req, res) => {
  const id = req.params.id;
  const { usuario, password, nombre, perfil, estado } = req.body;
  Usuario.update(id, usuario, password, nombre, perfil, estado, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Usuario actualizado', result });
  });
};

// Eliminar un usuario
exports.deleteUsuario = (req, res) => {
  const id = req.params.id;
  Usuario.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Usuario eliminado', result });
  });
};
