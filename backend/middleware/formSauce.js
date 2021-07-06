// On vérifie si les données du formulaire sont valides
/*module.exports = (req, res, next) => {
    try {
        const regex = /^[A-Za-z0-9-'\s]{2,100}$/;
        //const regexDescription = /^[A-Za-z0-9-'\s]{2,100}$/;
        console.log(req.body.sauce+ " "+ regex.test(req.body.name) +" "+req.body.manufacturer+" " +regex.test(req.body.manufacturer) + " 3 : "+regex.test(req.body.description) + " 4 : "+regex.test(req.body.mainPepper));
        if ( !regex.test(req.body.name) || !regex.test(req.body.manufacturer) || !regex.test(req.body.description) || !regex.test(req.body.mainPepper)) {
            throw 'Donnees invalides !';
            } 
        else {
            next();
            }
        } 
    catch {
        res.status(401).json({
            error: 'Invalid request : au moins une des données du formulaire est invalide !'
            });
        }
    };*/