//Rutas para producto
const express = require('express'); //Importamos el servicio de express
const router = express.Router(); //Llamamos para controlar las rutas junto con express
const postController = require('../controllers/postController')
const UserController = require('../controllers/user')
const comentController = require('../controllers/ComentController')
var md_auth = require('../middlewares/authenticated')

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

router.post('registro', UserController.saveUser);
router.post('/ingreso', UserController.loginUser);
router.get('/usuario/:id', md_auth.ensureAuth,UserController.getUser);
router.get('/usuario/:page?', md_auth.ensureAuth,UserController.getUsers);
router.put('/actualizar-usuario/:id', md_auth.ensureAuth,UserController.updateUser);

module.exports = router //Exportamos el modulo de rutas