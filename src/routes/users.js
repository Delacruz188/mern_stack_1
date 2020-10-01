const { Router } = require('express');
// ahora vamos guardar el router en una variable para posteriormente exportarlo y usarlo en otros archivos (modulos)
const router = Router();
// con el .send mandamos una string
// con el .json mandamos un json
// para la ruta saludo ----------------------
router.route('/saludo')
    .get((req, res) => {
        res.send('GET, estas en la ruta /api/users/saludo');
    })
    .post((req, res) => {
        res.send('POST, estas en la ruta /api/users/saludo');
    })


// -------------------------

module.exports = router;