// here we have to get started the server with express
const express = require('express');
const cors = require('cors')
const app = express();

// settings 
// nos va a servir para configurar el servidor
// aqui podremos determinar un motor de plantillas que vamos a utilizar, establecer un nombre para nuestro servidor, establecer un puerto, entre otras opciones
app.set('port', process.env.PORT );

// middlewares
// nos va a permitir ejecutar ciertas funciones para que se ejecuten antes de que una peticion llegue a su ruta de destino
// este middleware es para poder intercambiar datos entre servidores
// le decimos al server que use cors
// tambien le diremos al servidor que lea archivos en formato JSON
app.use(cors());
app.use(express.json());


// routes
// simplemente seran las rutas de nuestra aplicacion
app.use('/api/users', require('./routes/users'));

app.use('/api/notes', require('./routes/notes'));

// now, we won't that the server get started here, so we are gonna export it
module.exports = app;