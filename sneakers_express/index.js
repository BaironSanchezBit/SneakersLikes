/* CREACION DEL SERVIDOR */
const express = require('express'); //Llamada del servicio de express
const conectarDB = require('./config/db');
const cors = require('cors')

const app = express(); //Implementacion del servicio

//Conectamos a la BD
conectarDB(); //Llamamos la funcion

app.use(cors())
app.use(express.json());

app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/post', require('./routes/post'));

//Creacion del servidor para ejecutarlo en http://localhost:4000/
app.listen(4000, () => {
    console.log("El servidor se ha iniciado")
})