const express = require('express');
const router = express.Router();

// Importation des middlewares qui limitent les tentatives de connexion et de création de comptes
const limiteConnexion = require('../middleware/limiteConnexion');
const limiteCreation = require('../middleware/limiteCreation');

// Importation du middleware qui vérifie si le mot de passe est valide
const passwordValide = require('../middleware/password');

// Importation du middleware qui vérifie si l'email est valide
const emailValide = require('../middleware/email');

const userCtrl = require('../controllers/user');

router.post('/signup', emailValide, passwordValide, limiteCreation, userCtrl.signup);
router.post('/login', limiteConnexion, userCtrl.login);

module.exports = router;