//Rutas para producto
const express = require('express'); //Importamos el servicio de express
const router = express.Router(); //Llamamos para controlar las rutas junto con express
const postController = require('../controllers/postController')
const usuarioController = require('../controllers/usuarioController')
const comentController = require('../controllers/ComentController')

router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario);

//Configuramos la ruta usando el controlador
router.post('/crear-publicacion', postController.crearPost);
router.put('/actualizar-publicacion/:id', postController.actualizarPost);
router.delete('/borrar-publicacion/:id' , postController.borrarPost)
router.get('/publicaciones', postController.obtenerPost);
router.get('/publicacion/:id', postController.obtenerPostEspecifico);

router.post('/crear-comentario', comentController.crearComentario);
router.put('/actualizar-comentario/:id', comentController.actualizarPost);
router.delete('/borrar-comentario/:id', comentController.borrarComent);
router.get('/comentarios', comentController.obtenerPost);
router.get('/comentario/:id', comentController.obtenerComentEspecifico);



module.exports = router //Exportamos el modulo de rutas