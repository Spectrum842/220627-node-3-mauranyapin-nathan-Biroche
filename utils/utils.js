import { WinnerModel, WinnerSchema } from '../models/Winner.js'
import { PatrieModel, PatrieSchema } from '../models/Patrie.js'

export const createWinner = (gain, user,patrieTab, patrieWin, patrieWinTab) => {
    console.log("UTIL.JS")
    console.log('USERE : '+user._id);
    for(let i=0; i <gain; i++){
        let rngNumber =(Math.floor(Math.random()*8 ));
        patrieWin.push(patrieTab[rngNumber])
        
    }
    console.log(patrieWin)
    console.log('PATRIEWIN LENGTH'+patrieWin.length)
    for(let i =0; i<patrieWin.length;i++){
        if(i<1){
            console.log('ajout dans le tableau')
            patrieWinTab.push(patrieWin[i]);
        }else{
            console.log(patrieWin.filter(patrie => patrie == patrieWin[i]).length)
            if(patrieWin.filter(patrie => patrie == patrieWin[i]).length > 1 && patrieWinTab.includes(patrieWin[i])){
                console.log("pas d'ajout déjà présent")
            }else{
                patrieWinTab.push(patrieWin[i]);
            }
        }
    }
    console.log('DEBUT PATRIE WIN TAB')
    console.log(patrieWinTab)
    console.log("FIN PATRIE WIN TAB")
    patrieWinTab.forEach((element) => {
        let quantity = patrieWin.filter(patrie => patrie === element).length
        console.log('QUANTITY '+quantity)
        PatrieModel.findOneAndUpdate({'_id' : element._id}, {'number' : element.number-=quantity})
        .then(() => {
            let date = new Date();
            const Winner = new WinnerModel({
                "user_id": user._id,
                "patrie_id" : element._id,
                "name": element.name,
                "quantity" : quantity,
                "date": date
            })
        
            Winner.save() 
            .then((doc) => {
                console.log('coucou')
    
            }) 
        });
        
    })
}