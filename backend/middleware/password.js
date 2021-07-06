  
// On importe le modèle passwordSchema
const passwordSchema = require('../models/password');

// On vérifie si le mot de passe est valide
module.exports = (req, res, next) => {
    try {
        if ( !passwordSchema.validate(req.body.password) ) {
            throw 'Mot de passe invalide!';
            } 
        else {
            next();
            }
        } 
    catch {
        res.status(401).json({
            error: 'Invalid request : mot de passe invalide !'
            });
        }
    };