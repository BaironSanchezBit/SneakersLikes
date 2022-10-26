var User = require('../models/user')
var jwt = require('../services/jwt')
var fs = require('fs')
var path = require('path')


//REGISTRO
function saveUser(req, res) {
    var params = req.body
    var user = new User();

    if (params.name && params.email && params.password) {
        user.name = params.name
        user.email = params.email
        user.password = params.password

        //18 Controlar ususarios duplicados
        User.find({ email: user.email.toLowerCase() }
        ).exec((err, users) => {
            if (err) return res.status(500).send({ message: 'Error en la peticion de usuarios' })

            if (users && users.length >= 1) {
                return res.status(200).send({ message: 'El usuario que intenta registrar ya existe' })
            } else {
                // Cifra la password y guarda los datos
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    user.password = hash;
                    user.save((err, userStored) => {
                        if (err) return res.status(500).send({ message: 'Error al guardar el usuario' })

                        if (userStored) {
                            res.status(200).send({ user: userStored })
                        } else {
                            res.status(404).send({ message: 'No se ha registrado el usuario' })
                        }
                    })
                })
            }
        })
    }
    else {
        res.status(200).send({
            message: 'Envia todos los campos necesarios!!'
        })
    }
}


//LOGIN
function loginUser(req, res) {
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({ email: email }, (err, user) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' });

        if (user) {
            bcrypt.compare(password, user.password, (err, check) => {
                if (check) {

                    if (params.gettoken) {
                        //generar y devolver token
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        })
                        //generar token
                    } else {
                        //Devolver datos de ususario
                        user.password = undefined;
                        return res.status(200).send({ user })
                    }

                } else {
                    return res.status(404).send({ message: 'El ususario no se ha podido identificar' });
                }
            })
        } else {
            return res.status(404).send({ message: 'El ususario no se ha podido identificar!!' });
        }
    });
}

//Conseguir datos de un usuario
function getUser(req, res) {
    var userId = req.params.id

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' })
        if (!user) return res.status(404).send({ message: 'El ususario no existe' })

        followThisUser(req.user.sub, userId).then((value) => {
            return res.status(200).send({
                user,
                following: value.following,
                followed: value.followed
            })
        })
    })

}

//Devolver un listado de usuarios paginado
function getUsers(req, res) {
    var identity_user_id = req.user.sub
    var page = 1
    if (req.params.page) {
        page = req.params.page
    }
    var itemsPerPage = 5
    User.find().sort('_id').paginate(page, itemsPerPage, (err, users, total) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' })
        if (!users) return res.status(404).send({ message: 'No hay ususarios disponibles' })

        followUserIds(identity_user_id).then((value) => {
            return res.status(200).send({
                users,
                users_following: value.following,
                users_follow_me: value.followed,
                total,
                pages: Math.ceil(total / itemsPerPage)
            })
        })
    })
}

//Edición de datos de ususario
function updateUser(req, res) {
    var userId = req.params.id
    var update = req.body

    // borrar propiedad password
    delete update.password

    if (userId != req.user.sub) {
        return res.status(500).send({ message: 'No tienes permiso para actualizar los datos del usuario' })
    }

    User.findByIdAndUpdate(userId, update, { new: true }, (err, userUpdated) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' })

        if (!userUpdated) return res.status(404).send({ message: 'No se ha podido actualizar el usuario' })

        return res.status(200).send({ user: userUpdated })
    })
}

//26 Subir archivos de imagen/ avatar de usuario 

module.exports = {
    saveUser,
    loginUser,
    getUser,
    getUsers,
    updateUser,
}