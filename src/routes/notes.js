// vamos a importar al router de express. Eso lo hacemos de la siguiente manera
const { Router } = require('express');
// ahora vamos guardar el router en una variable para posteriormente exportarlo y usarlo en otros archivos (modulos)
const router = Router();

// ahora vamos a hacer que al ingresar a la ruta /api/notes/ el enrutador dirija a ciertos lugares (rutas) una vez entrado a esa ruta
router.route('/saludo')
    .get((req, res) => {
        res.send('Hola desde /api/notes/saludo');   
    })

module.exports = router;