import { UserModel, UserSchema } from '../models/User.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const YamsControllerGet = (req, res) => {
    console.log('USER ID : '+req.session._id)
    let diceTab = []
    let patrieWin = []
    let occurenceTab = []
    console.log(req.query)
    PatrieModel.find()
        .then((patrieTab) =>{
            //console.log(patrieTab[0]._id);
            if(req.query.play == "true"){
                console.log('coucou')
                
                for(let i = 0 ; i < 5; i++){
        
                    diceTab[i]= (Math.floor(Math.random()*6 +1 ))
                }
                console.log(diceTab)
                for(let i= 1; i<7; i++){
                    occurenceTab.push(diceTab.filter(element => element==i).length)
                }
                console.log(occurenceTab)

                if(occurenceTab.filter(element => element == 2).length>1){
                    console.log('Double paire !')
                    patrieWin.push(patrieTab[(Math.floor(Math.random()*8 ))])
                    
                }else if(occurenceTab.filter(element => element == 4) != ''){
                    console.log('Carré ! ')
                    patrieWin.push(patrieTab[(Math.floor(Math.random()*8 ))])
                    patrieWin.push(patrieTab[(Math.floor(Math.random()*8 ))])

                }else if (  occurenceTab.filter(element => element == 5).length !=  '' ){
                    console.log('yams')
                    patrieWin.push(patrieTab[(Math.floor(Math.random()*8 ))])
                    patrieWin.push(patrieTab[(Math.floor(Math.random()*8 ))])
                    patrieWin.push(patrieTab[(Math.floor(Math.random()*8 ))])
                }else{
                    console.log("Perdu l'ami")
                }
            
            }
            
            res.render('../views/game/yams', {diceTab, patrieWin}) 
    } );
}





export const YamsControllerPost = (req, res) => {
    
    res.render('../views/game/yams')
}