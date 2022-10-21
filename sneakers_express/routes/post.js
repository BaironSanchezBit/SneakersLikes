//Rutas para producto
const express = require('express'); //Importamos el servicio de express
const router = express.Router(); //Llamamos para controlar las rutas junto con express
const usuarioController = require('../controllers/postController')

//Configuramos la ruta usando el controlador
router.post('/', postController.crearUsuario);
router.get('/', postController.obtenerUsuario)

module.exports = router //Exportamos el modulo de rutas