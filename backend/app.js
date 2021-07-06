const express = require('express');
//Abandon de bodyparser au profit de express.json
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
//Importation du package Helmet. Il vous aide à protéger votre application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP
const helmet = require('helmet');
//Importation du package express-session qui sécurise les cookies
const session = require('express-session');

require('dotenv').config();

const mongo = process.env.MONGO;

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

mongoose.connect(mongo,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });

//Utilisation de express-session pour sécuriser les cookies
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'piquante projet6',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
    }));

//app.use(bodyParser.json());
app.use(express.json());

//Utilisation de helmet pour configurer les en têtes HTTP
app.use(helmet());

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;