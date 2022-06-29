import { UserModel, UserSchema } from '../models/User.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const YamsControllerGet = (req, res) => {

    let diceTab = []
    console.log(req.query)
    if(req.query.play == "true"){
        console.log('coucou')
        
        for(let i = 0 ; i < 5; i++){

            diceTab[i]= (Math.floor(Math.random()*10 + 1))
        }
        console.log(diceTab)
    }
    res.render('../views/game/yams', {diceTab})
    
}





export const YamsControllerPost = (req, res) => {
    
    res.render('../views/game/yams')
}