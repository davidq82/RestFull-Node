// routes/tokenRoutes.js
const express = require('express');
const router = express.Router();
const { generarToken } = require('../controllers/tokenController');

// Ruta GET para generar un token
router.get('/generar-token', generarToken);

module.exports = router;

