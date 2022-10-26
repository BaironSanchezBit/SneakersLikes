//Rutas para producto
const express = require('express'); //Importamos el servicio de express
const router = express.Router(); //Llamamos para controlar las rutas junto con express
const postController = require('../controllers/postController')
const usuarioController = require('../controllers/usuarioController')

router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario);

//Configuramos la ruta usando el controlador
router.post('/crear-post', postController.crearPost);
router.put('/update-post/:id', postController.actualizarPost);
router.delete('/borrar-post/:id' , postController.borrarPost)
router.get('/publication', postController.obtenerPost);
router.get('/publication/:id', postController.obtenerPostEspecifico);
router.get('/ver-publicaciones/:id', postController.obtenerPostEspecifico);
router.get('/post/:id', postController.obtenerPostEspecifico)

module.exports = router //Exportamos el modulo de rutas