import { UserModel, UserSchema } from '../models/User.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'
import { WinnerModel, WinnerSchema } from '../models/Winner.js'
import { createWinner } from '../utils/utils.js'
import dotenv from "dotenv"
dotenv.config()
const { APP_SECRET: secret } = process.env

export const YamsControllerGet = (req, res) => {

    console.log('USER ID : '+req.session._id)
    let user_id ='62badadbad335ff96d98c691';
    let userInfo;
    let diceTab = []
    let patrieWin = []
    let occurenceTab = []
    if(user_id){
        UserModel.findById(user_id, (err,user) =>{
        console.log(user)
        let gameAttempt = user.gameAttempt;
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
                let date = Date();
                if(occurenceTab.filter(element => element == 2).length>1){
                    console.log('Double paire !')

                    createWinner(patrieTab, patrieWin)
                    // let rngNumber =(Math.floor(Math.random()*8 ));
                    // let patrieId = patrieTab[rngNumber]._id

                    // patrieWin.push(patrieTab[rngNumber])
                    // // PatrieModel.findOneAndUpdate({'_id' : patrieId}, {'number' : patrieTab[rngNumber].number-1})
                    // // .then((update) => {console.log(update)});
                    // let date = Date();
                    // console.log(date + patrieTab[rngNumber].name);
                    // const Winner = new WinnerModel({
                    //     "name": patrieTab[rngNumber].name,
                    //     "quantity": 1,
                    //     "date": date,
                    // })
            
                    // Winner.save() 
                    //     .then((doc) => {
                    //         console.log('coucou')
                    //         console.log(doc)
                
                    //     }) 
                    //     .catch((err) => {
                    //         console.log(err)
                    //     })
                    
                // }else if(occurenceTab.filter(element => element == 4) != ''){
                //     console.log('Carré ! ')

                //     let rngNumber1 =(Math.floor(Math.random()*8 ));
                //     let rngNumber2 =(Math.floor(Math.random()*8 ));
                //     let patrieId1 = patrieTab[rngNumber1]._id
                //     let patrieId2 = patrieTab[rngNumber2]._id

                    
                //     patrieWin.push(patrieTab[rngNumber1])
                //     patrieWin.push(patrieTab[rngNumber2])
                //     // PatrieModel.findOneAndUpdate({'_id' : patrieId1}, {'number' : patrieTab[rngNumber1].number-1})
                //     // .then((update) => {console.log(update)});

                //     // PatrieModel.findOneAndUpdate({'_id' : patrieId2}, {'number' : patrieTab[rngNumber2].number-1})
                //     // .then((update) => {console.log(update)});

                //     const Winner1 = new WinnerModel({
                //         "name": patrieTab[rngNumber1].name,
                //         "quantity": 1,
                //         "date": date,
                //     })

                //     const Winner2 = new WinnerModel({
                //         "name": patrieTab[rngNumber2].name,
                //         "quantity": 1,
                //         "date": date,
                //     })

                //     Winner1.save()
                //         .then((doc) => {
                //             console.log('coucou')
                //             console.log(doc)
                
                //         }) 
                //         .catch((err) => {
                //             console.log(err)
                //         })

                //     Winner2.save()
                //     .then((doc) => {
                //         console.log('coucou')
                //         console.log(doc)
            
                //     })
                //     .catch((err) => {
                //         console.log(err)
                //     })
                // }else if (  occurenceTab.filter(element => element == 5).length !=  '' ){
                //     console.log('yams')
                //     let rngNumber1 =(Math.floor(Math.random()*8 ));
                //     let rngNumber2 =(Math.floor(Math.random()*8 ));
                //     let rngNumber3 =(Math.floor(Math.random()*8 ));
                //     let patrieId1 = patrieTab[rngNumber1]._id
                //     let patrieId2 = patrieTab[rngNumber2]._id
                //     let patrieId3 = patrieTab[rngNumber3]._id

                //     patrieWin.push(patrieTab[rngNumber1])
                //     patrieWin.push(patrieTab[rngNumber2])
                //     patrieWin.push(patrieTab[rngNumber3])
                //     // PatrieModel.findOneAndUpdate({'_id' : patrieId1}, {'number' : patrieTab[rngNumber1].number-1})
                //     // .then((update) => {console.log(update)});

                //     // PatrieModel.findOneAndUpdate({'_id' : patrieId2}, {'number' : patrieTab[rngNumber2].number-1})
                //     // .then((update) => {console.log(update)});

                //     // PatrieModel.findOneAndUpdate({'_id' : patrieId3}, {'number' : patrieTab[rngNumber3].number-1})
                //     // .then((update) => {console.log(update)});
                //     //PatrieModel.updateMany({ number: 10}).then((update)=>{console.log(update)})

                //     const Winner1 = new WinnerModel({
                //         "name": patrieTab[rngNumber1].name,
                //         "quantity": 1,
                //         "date": date,
                //     })

                //     const Winner2 = new WinnerModel({
                //         "name": patrieTab[rngNumber2].name,
                //         "quantity": 1,
                //         "date": date,
                //     })

                //     const Winner3 = new WinnerModel({
                //         "name": patrieTab[rngNumber3].name,
                //         "quantity": 1,
                //         "date": date,
                //     })

                //     Winner1.save()
                //         .then((doc) => {
                //             console.log('patisserie 1 enregistré')
                //             console.log(doc)
                
                //         }) 
                //         .catch((err) => {
                //             console.log(err)
                //         })

                //     Winner2.save()
                //     .then((doc) => {
                //         console.log('patisserie 2 enregistré')
                //         console.log(doc)
            
                //     })
                //     .catch((err) => {
                //         console.log(err)
                //     })

                //     Winner3.save()
                //     .then((doc) => {
                //         console.log('patisserie 3 enregistré')
                //         console.log(doc)
                //     })
                //     .catch((err) => {
                //         console.log(err)
                //     })

                    

                // }else{
                    console.log("Perdu l'ami")
                }
                UserModel.findOneAndUpdate({'_id' : user_id}, {'gameAttempt' : user.gameAttempt+1})
                    .then((update) => {console.log(update)});
            }
            
            res.render('../views/game/yams', {user, gameAttempt, diceTab, patrieWin}) 
            } );
        }); 
    }else{
        res.redirect('/connexion')
    }
    
}





export const YamsControllerPost = (req, res) => {
    
    res.render('../views/game/yams')
}