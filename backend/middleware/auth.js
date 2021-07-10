const jwt = require('jsonwebtoken');

require('dotenv').config();

const clePassword = process.env.CLE_PASSWORD_BDD;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, clePassword);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
            }
    } catch {
        res.status(401).json({
            error: 'Invalid request!'
            });
        }
    };