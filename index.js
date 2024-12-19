// index.js
const express = require('express');
require('dotenv').config();  // Cargar las variables de entorno

const app = express();

// Importar rutas
const tokenRoutes = require('./routes/tokenRoutes');
const zonaRoutes = require('./routes/zonaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas para generar token
app.use('/token', tokenRoutes);
app.use('/zonas', zonaRoutes); // Ruta de zonas
app.use('/usuarios', usuarioRoutes); // Ruta de zonas
app.use('/auth', authRoutes);      // Ruta de autenticación (login)

// Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

