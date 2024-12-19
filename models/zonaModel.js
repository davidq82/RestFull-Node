const db = require('../config/db');

const Zona = {
  getAll: (callback) => {
    const query = 'CALL listar_zonas()';
    db.query(query, callback);
  },

  create: (nombre, callback) => {
    const query = 'CALL insertar_zona(?)';
    db.query(query, [nombre], callback);
  },

  update: (id, nombre, callback) => {
    const query = 'CALL editar_zona(?, ?)';
    db.query(query, [id, nombre], callback);
  },

  delete: (id, callback) => {
    const query = 'CALL eliminar_zona(?)';
    db.query(query, [id], callback);
  }
};

module.exports = Zona;
