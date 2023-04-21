//Importation de Mongoose
const mongoose = require('mongoose');

//Création du schéma de donnée pour les sauces
const sauceSchema = mongoose.Schema({ 
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String },
    heat: { type: Number },
    likes: { type: Number, default: 0},
    dislikes: { type: Number, default: 0 },
    userId: { type: String },
    usersLiked: [String],
    usersDisliked: [String] ,
});

//Export du model Mongoose
module.exports = mongoose.model('Sauce', sauceSchema);