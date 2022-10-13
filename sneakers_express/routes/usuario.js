//Rutas para producto
const express = require('express'); //Importamos el servicio de express
const router = express.Router(); //Llamamos para controlar las rutas junto con express
const usuarioController = require('../controllers/usuarioController')

//Configuramos la ruta usando el controlador
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario)

module.exports = router //Exportamos el modulo de rutas