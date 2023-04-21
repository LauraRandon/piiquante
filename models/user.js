//Importation de Mongoose
const mongoose = require('mongoose');
//Ajout du package validator de Mongoose
const uniqueValidator = require('mongoose-unique-validator'); 

//Création du schéma de donnée pour les users
const userSchema = mongoose.Schema({ 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }
});

//Application du validator au schéma
userSchema.plugin(uniqueValidator); 

//Export du model Mongoose
module.exports = mongoose.model('User', userSchema);