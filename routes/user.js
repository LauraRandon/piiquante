//Importation de Express
const express = require('express');

//Création d'un router
const router = express.Router();

//Importation de express rate limit en prévention des forces brutes
const rateLimit = require('express-rate-limit'); 
//Importation du controller
const userCtrl = require('../controllers/user');

//Définition du package
const passLimiter = rateLimit({
    windowMs: 2 * 60 * 1000, 
    max: 3 
  });

//Création des routes
router.post('/signup', userCtrl.signup);
router.post('/login',passLimiter, userCtrl.login);

//Export du router
module.exports = router;