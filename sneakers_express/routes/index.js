//Rutas para producto
const express = require('express'); //Importamos el servicio de express
const router = express.Router(); //Llamamos para controlar las rutas junto con express
const postController = require('../controllers/postController')
const UserController = require('../controllers/user')
const comentController = require('../controllers/ComentController')

//Configuramos la ruta usando el controlador
router.post('/crear-publicacion', postController.crearPost);
router.put('/actualizar-publicacion/:id', postController.actualizarPost);
router.delete('/borrar-publicacion/:id' , postController.borrarPost)
router.get('/publicaciones', postController.obtenerPost);
router.get('/publicacion/:id', postController.obtenerPostEspecifico);
router.get('/publicacionDe', postController.obtenerPost)

router.post('/crear-comentario', comentController.crearComentario);
router.delete('/borrar-comentarios-admin/:id', comentController.borrarComent);
router.get('/comentarios', comentController.obtenerPost);
router.get('/comentarios-admin', comentController.obtenerPost);
router.get('/comentarios-admin/:id', comentController.obtenerComentEspecifico);

router.post('/crear-usuario', UserController.crearUsuario);


module.exports = router //Exportamos el modulo de rutas 