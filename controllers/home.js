import { UserModel, UserSchema } from '../models/User.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const HomeControllerGet = (req, res) => {
    res.render('../views/homepage/home')

}


export const HomeControllerPost = (req, res) => {

    let filter = { _id: "62badadbad335ff96d98c691" }
    UserModel.findById("62badadbad335ff96d98c691")
        .then((doc) => {
            console.log(doc)
            res.render('../views/homepage/home')
        }).catch((err) => {
            console.log(err)
            res.json({ "message": "Erreur lors de la récupération de l'utilisateur " })
        })
}