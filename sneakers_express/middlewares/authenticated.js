var secret = 'clave_secreta'

exports.ensureAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'la peticion no tiene la cabecera de autenticación' })
    }

    var token = req.headers.authorization.replace(/['"]+/g, '')

    try {
        var payload = jwt.decode(token, secret);

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado' })
        }
    } catch (ex) {
        return res.status(404).send({ message: 'El token no es valido' })
    }

    req.user = payload;

    next();
}