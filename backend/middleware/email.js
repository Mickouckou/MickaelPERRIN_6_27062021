// On vérifie si l'email est valide
module.exports = (req, res, next) => {
    try {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if ( !regex.test(req.body.email) ) {
            throw 'Email invalide !';
            } 
        else {
            next();
            }
        } 
    catch {
        res.status(401).json({
            error: 'Invalid request : email invalide !'
            });
        }
    };