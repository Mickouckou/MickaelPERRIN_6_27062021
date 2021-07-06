var passwordValidator = require('password-validator');
 
// On créé un schéma de mot de passe
var passwordSchema = new passwordValidator();
 
// On lui applique les propriétés suivantes
passwordSchema
    .is().min(6)                                    // Longueur minimum 6 caractères
    .is().max(20)                                   // Longueur maximum 20 caractères
    .has().uppercase()                              // Doit contenir au moins une majuscule
    .has().lowercase()                              // Doit contenir au moins une minuscule
    .has().digits()                                 // Doit contenir au moins un chiffre
    .has().not().spaces()                           // Ne doit pas contenir d'espaces
    .is().not().oneOf(['Passw0rd', 'Password123'])  // Liste noire des mots de passe
    .has().not(/[='":]/);                           // Regex contenant des caractères qui ne doivent pas être utilisés 

//On exporte notre schéma pour l'utiliser.
module.exports = passwordSchema;