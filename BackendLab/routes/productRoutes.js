//9. se debe llamar a express de nuevo
const express = require ('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

//definimos rutas del CRUD (create, read, update, delete)
router.post('/', productControllers.addProducts);  //13.1
router.get('/', productControllers.searchProducts);  //13.2
router.get('/:id', productControllers.searchByProduct);  //13.3
router.delete('/:id', productControllers.deleteByProduct);  //13.4
router.put('/:id', productControllers.updateProduct);  //13.4


//9. exportando el modulo
module.exports = router;
