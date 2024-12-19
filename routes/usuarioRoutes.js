const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/auth'); // Middleware para verificar el token

// Rutas CRUD para usuarios
router.get('/', auth, usuarioController.getUsuarios);        // Obtener todos los usuarios
router.get('/:id', auth, usuarioController.getUsuarioById);  // Obtener usuario por ID
router.post('/', auth, usuarioController.createUsuario);     // Crear un nuevo usuario
router.put('/:id', auth, usuarioController.updateUsuario);   // Actualizar un usuario
router.delete('/:id', auth, usuarioController.deleteUsuario); // Eliminar un usuario

module.exports = router;
