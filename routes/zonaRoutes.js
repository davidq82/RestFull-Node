const express = require('express');
const router = express.Router();
const zonaController = require('../controllers/zonaController');
const auth = require('../middlewares/auth'); // Middleware para verificar el token

router.get('/', auth, zonaController.getZona);
router.post('/', auth, zonaController.createZona);
router.put('/', auth, zonaController.updateZona);
router.delete('/', auth, zonaController.deleteZona);


module.exports = router;