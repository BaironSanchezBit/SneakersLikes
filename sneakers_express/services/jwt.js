var secret = 'clave_secreta'

exports.createToken = function(user){
    var payload = {
        name: user.name,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    }

    return jwt.encode(payload, secret)
}