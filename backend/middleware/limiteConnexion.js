//Importation du package express-rate-limit qui permet de limiter le nombre de tentatives de connexion
//ainsi que le nombre de création de compte
const expressRateLimit = require('express-rate-limit');

// On limite à 5 tentatives de connexion avant un blocage de 10 min
const limiteConnexion = expressRateLimit({
	windowMs: 10 * 60 * 1000, //10 minutes
	max: 5, //Nb de tentatives avant blocage
	message: "Vous vous êtes trompés 5 fois de mot de passe, veuillez attendre 10 minutes avant de réessayer !",
    });

// On exporte le middleware qui limite le nombre de tentatives de connexion
module.exports = limiteConnexion;
