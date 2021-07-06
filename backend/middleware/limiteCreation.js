//Importation du package express-rate-limit qui permet de limiter le nombre de tentatives de connexion
//ainsi que le nombre de création de compte
const expressRateLimit = require('express-rate-limit');

//On limite le nombre de compte créés depuis la même adresse IP à 2 avant un blocage d'une heure
const limiteCreation = expressRateLimit({
	windowMs: 60 * 60 * 1000, // une heure (60 minutes)
	max: 2, //Nb de créations avant blocage
	message: "2 comptes ont été créés depuis cette adresse IP. Veuillez attendre 1 heure avant de recommencer."
	});

//On exporte le middleware de création de comptes
module.exports = limiteCreation;