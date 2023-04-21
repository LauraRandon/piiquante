//Importation des packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
//Importation des packages pour la sécurité
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require("helmet");

//Importation des routes
const saucesRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

//Création de l'app Express
const app = express();


//Connexion à la base de donnée MongoDB
mongoose.connect('mongodb+srv://randonlaura1:lrsum1829@cluster0.bzubogs.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
     useUnifiedTopology: true 
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//Headers pour contourner les erreurs CORS
app.use((req, res, next) => 
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Conversion de la requete
app.use(bodyParser.json());

//Gestion MongoSanitize
app.use(mongoSanitize());

//Gestion Helmet 
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

//Import des routes de l'API
//Gestion des images de manière statiques
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);
    
 //Export de l'app
module.exports = app;
