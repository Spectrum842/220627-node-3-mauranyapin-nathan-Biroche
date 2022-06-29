import { UserModel, UserSchema } from '../models/User.js'
export const InscriptionControllerGet = (req, res) => {
    res.render('../views/authentification/inscription')
}


export const InscriptionControllerPost = (req, res) => {
    const { firstname, lastname, email, password } = req.body
    console.log(req.body);
    // Avec les données récupérés on cée un chat. Ce chat dispose en plus de ses propres caractéristiques de méthodes qui lui permettent d'agir en BDD, 
    const User = new UserModel({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password,
            "gameAttempt": 0,
        })
        //Un modèle dispose de méthodes qui permettent d'intéragir avec la bdd grâce a mongoose

    // Persistance du chat dans la bdd

    User.save() // Si tout est ok, on recoit le resultat "save"
        .then((doc) => {
            console.log('coucou')
            console.log(doc)

            res.json({ "message": "Le user a été persisté" })
        }) // Si ya erreur on la recoit
        .catch((err) => {
            console.log(err)
            res.json({ "message": "échec de l'insertion" })
        })
}