import { UserModel, UserSchema } from '../models/User.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const YamsControllerGet = (req, res) => {

    let diceTab = []
    let patrieTab = []
    let patrieWin = []
    let occurenceTab = []
    console.log(req.query)
    PatrieModel.find()
        .then((patrieTab) =>{
            console.log(patrieTab[0]._id);
            if(req.query.play == "true"){
                console.log('coucou')
                
                for(let i = 0 ; i < 5; i++){
        
                    diceTab[i]= (Math.floor(Math.random()*6 +1 ))
                }
                console.log(diceTab)
                let occurence1 = diceTab.filter(element => element==1);
                let occurence2 = diceTab.filter(element => element==2);
                let occurence3 = diceTab.filter(element => element==3);
                let occurence4 = diceTab.filter(element => element==4);
                let occurence5 = diceTab.filter(element => element==5);
                let occurence6 = diceTab.filter(element => element==6);
                occurenceTab.push(occurence1.length)
                occurenceTab.push(occurence2.length)
                occurenceTab.push(occurence3.length)
                occurenceTab.push(occurence4.length)
                occurenceTab.push(occurence5.length)
                occurenceTab.push(occurence6.length)
                console.log(occurenceTab)
            }
            
            res.render('../views/game/yams', {diceTab}) 
    } );
}





export const YamsControllerPost = (req, res) => {
    
    res.render('../views/game/yams')
}