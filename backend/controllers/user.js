const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//On importe CryptoJS qui va masquer l'email utilisateur
const CryptoJS = require("crypto-js");

require('dotenv').config();

const clePassword = process.env.CLE_PASSWORD_BDD;
//Ces 2 constantes permettent de toujours masquer de la même manière un email
const cleEmail = CryptoJS.enc.Hex.parse(process.env.CLE_EMAIL_BDD);
const iv = CryptoJS.enc.Hex.parse(process.env.IV);

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            // On crée une constante avec l'email masqué
            const emailMasque = CryptoJS.AES.encrypt(req.body.email, cleEmail, {iv: iv}).toString();
            const user = new User({
                email: emailMasque,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
            })
        .catch(error => res.status(500).json({ error }));
    };

exports.login = (req, res, next) => {
    User.findOne({ email: CryptoJS.AES.encrypt(req.body.email, cleEmail, {iv: iv}).toString() })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
                }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        }
                    res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                        { userId: user._id },
                        clePassword,
                        { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
            })
        .catch(error => res.status(500).json({ error }));
    };