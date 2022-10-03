const mongoose = require('mongoose'); //Importamos la dependencia de mongo
require('dotenv').config({path: 'config.env'}) //Importamos el archivo de config.env

//Agregamos una funcion asincrona para conectar a la base de datos
const conectarDB = async() => {
    //Realizamos un try catch para hacer las configuraciones respectivas para conectar a la BD
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('*------------------------------------------------------------------------*')
        console.log('')
        console.log('*MONGODB**MONGODB*       *MONGODB**MONGODB*                         ***   ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB*     *MONGODB*                   ***    ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB*       *MONGODB*                ***     ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB*     *MONGODB*                 ***      ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB**MONGODB*                     ***       ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB*     *MONGODB*               ***        ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB*       *MONGODB*    ***     ***         ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB*       *MONGODB*     ***   ***          ')
        console.log('*MONGODB*     *MONGODB*  *MONGODB*     *MONGODB*        *** ***           ')
        console.log('*MONGODB**MONGODB*       *MONGODB**MONGODB*              *****            ')
        console.log('')
        console.log('Conectado a la Base de Datos')
        console.log('*------------------------------------------------------------------------*')
    } catch (error) {
        console.log(error);
        process.exit(1) // Detenemos la aplicacion
    }
}

//Exportamos la funcion recien creada para que sea visible en otros archivos
module.exports = conectarDB