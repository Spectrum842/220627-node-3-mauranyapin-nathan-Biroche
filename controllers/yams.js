import { UserModel, UserSchema } from '../models/User.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'
import { WinnerModel, WinnerSchema } from '../models/Winner.js'
import { createWinner } from '../utils/utils.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const YamsControllerGet = (req, res) => {
   
    console.log('USER ID : '+req.session._id)
    let user_id ="62badadbad335ff96d98c691";
    let userInfo;
    let diceTab = []
    let winQuantity;
    let patrieWinTab = []
    let quantityTab = []
    let occurenceTab = []
    let gain;

    if(user_id){
        UserModel.findById(user_id, (err,user) =>{
            
        WinnerModel.find()
        .then((doc)=>{
                winQuantity = doc.length;
        })
        //PatrieModel.updateMany({}, { number: 10 }).then(()=>{});
        PatrieModel.find()
        .then((patrieTab) =>{
            if(req.query.play == "true"){
                for(let i = 0 ; i < 5; i++){
                    diceTab[i]= (Math.floor(Math.random()*6+1 ))
                }

                for(let i= 1; i<7; i++){
                    occurenceTab.push(diceTab.filter(element => element==i).length)
                }

                if(occurenceTab.filter(element => element == 2).length>1){
                    console.log('Double paire !')
                    gain = 1;
                    
                    
                }else if(occurenceTab.filter(element => element == 4) != ''){
                    console.log('Carré ! ')
                    gain = 2;

                }else if (  occurenceTab.filter(element => element == 5).length !=  '' ){
                    console.log('yams')
                    gain = 3;
                    

                 }else{
                    gain =0;
                }
                createWinner(gain,user,patrieTab, patrieWinTab, quantityTab)
                UserModel.findOneAndUpdate({'_id' : user_id}, {'gameAttempt' : user.gameAttempt+1})
                    .then(() => {});
                user.gameAttempt  += 1;
            }
            
            res.render('../views/game/yams', {user, winQuantity, diceTab, patrieWinTab, quantityTab}) 
            } );
        }); 
    }else{
        res.redirect('/connexion')
    }
    
}





export const YamsControllerPost = (req, res) => {
    
    res.render('../views/game/yams')
}