import { UserModel, UserSchema } from '../models/User.js'
import dotenv from "dotenv"
import CryptoJS from "crypto-js"
import jwt from "jsonwebtoken";
dotenv.config()
const { APP_SECRET: secret } = process.env

export const ConnexionControllerGet = (req, res) => {
    let filter = { email: '' }
    res.render('../views/connexion/connexion', { filter })

}

export const ConnexionControllerPost = (req, res) => {
    const filter = { email: req.body.email }
    console.log(filter)
    UserModel.find(filter)
        .then((doc) => {
            if (doc.length > 0) {
                if (doc[0].password == req.body.password) {
                    //ajout d'une propriété à l'objet session
                    req.session._id = doc[0]._id
                    console.log({ "message": "User trouvé", "User": doc })
                    
                    res.redirect('/yams')

                } else {

                    res.render('../views/connexion/connexion', { filter })
                }

            } else {
                res.json({ "message": "User inexistant, email ou mdp incorrect", "User": doc })
            }

        })
        .catch((err) => {
            console.log(err)
            res.json({ "message": "Erreur lors de la récupération de l'utilisateur " })
        })


}