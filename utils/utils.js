import { WinnerModel, WinnerSchema } from '../models/Winner.js'

export const createWinner = (patrieTab, patrieWin) => {
    let rngNumber =(Math.floor(Math.random()*8 ));
    let patrieId = patrieTab[rngNumber]._id

    patrieWin.push(patrieTab[rngNumber])
    // PatrieModel.findOneAndUpdate({'_id' : patrieId}, {'number' : patrieTab[rngNumber].number-1})
    // .then((update) => {console.log(update)});
    let date = Date();
    const Winner = new WinnerModel({
        "name": patrieTab[rngNumber].name,
        "quantity": 1,
        "date": date,
    })

    Winner.save() 
        .then((doc) => {
            console.log('coucou')
            console.log(doc)

        }) 
        .catch((err) => {
            console.log(err)
        })
}