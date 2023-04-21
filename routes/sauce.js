//Importation de Express
const express = require('express');

//Création d'un router
const router = express.Router();

//Importation du controller
const sauceCtrl = require('../controllers/sauce');
//Importation des middlewares 
const auth = require('../middleware/auth'); 
const multer = require('../middleware/multer-config'); 

//Création des routes
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);

//Export du router
module.exports = router;