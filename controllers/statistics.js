import { UserModel, UserSchema } from '../models/User.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'
import { WinnerModel, WinnerSchema } from '../models/Winner.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const StatisticController = (req, res) => {
   
    console.log('USER ID : '+req.session._id)
    let user_id =req.session._id;

    if(user_id){
        
        WinnerModel.find({"user_id" : user_id})
        .then((doc)=>{
            res.render('../views/statistics/statistics', {doc})
        })
    }else{
        res.redirect('/connexion')
    }
    
}





export const YamsControllerPost = (req, res) => {
    
    res.render('../views/game/yams')
}