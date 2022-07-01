import { UserModel, UserSchema } from '../models/User.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'
import { WinnerModel, WinnerSchema } from '../models/Winner.js'
import { createWinner } from '../utils/utils.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const YamsControllerGet = (req, res) => {
   
    console.log('USER ID : '+req.session._id)
    let user_id =req.session._id;
    let userInfo;
    let diceTab = []
    let patrieWin = []
    let patrieWinTab = []
    let occurenceTab = []
    if(user_id){
        UserModel.findById(user_id, (err,user) =>{
        let gameAttempt = user.gameAttempt;

        
        //PatrieModel.updateMany({}, { number: 10 }).then(()=>{});
        PatrieModel.find()
        .then((patrieTab) =>{
            if(req.query.play == "true"){
                console.log('coucou')
                for(let i = 0 ; i < 5; i++){
                    diceTab[i]= (Math.floor(Math.random()*6+1 ))
                }

                for(let i= 1; i<7; i++){
                    occurenceTab.push(diceTab.filter(element => element==i).length)
                }

                if(occurenceTab.filter(element => element == 2).length>1){
                    console.log('Double paire !')
                    createWinner(1,user,patrieTab, patrieWin, patrieWinTab)
                    
                }else if(occurenceTab.filter(element => element == 4) != ''){
                    console.log('Carré ! ')
                    createWinner(2,user,patrieTab, patrieWin, patrieWinTab)

                }else if (  occurenceTab.filter(element => element == 5).length !=  '' ){
                    console.log('yams')
                    createWinner(3,user,patrieTab, patrieWin, patrieWinTab)

                 }else{
                    console.log("Perdu l'ami")
                }
                UserModel.findOneAndUpdate({'_id' : user_id}, {'gameAttempt' : user.gameAttempt+1})
                    .then((update) => {console.log(update)});
            }
            
            res.render('../views/game/yams', {user, gameAttempt, diceTab, patrieWinTab}) 
            } );
        }); 
    }else{
        res.redirect('/connexion')
    }
    
}





export const YamsControllerPost = (req, res) => {
    
    res.render('../views/game/yams')
}