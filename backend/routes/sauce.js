const express = require('express');
const router = express.Router();

// On importe le module d'authentification
const auth = require('../middleware/auth');
// On importe le module de gestion de fichier
const multer = require('../middleware/multer-config');
// On importe le module qui vérifie les champs du formulaire de création de sauce
//const valideSauce = require('../middleware/formSauce');

const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeDislikeSauce);

module.exports = router;