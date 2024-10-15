const express = require('express');
const userRoute = require('./src/routes/user.route.js');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
// Carpeta de las vistas
app.set('views', path.join(__dirname, 'src/views'));
// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));
// Rutas de usuario
app.use(userRoute);
// Puerto
const PORT = 3001;
// Iniciamos el servidor
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});