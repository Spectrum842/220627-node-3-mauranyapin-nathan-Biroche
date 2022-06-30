import mongoose from "mongoose"
// Schéma pour un chat, les schémas sont nécessaires avec Mongoose
export const WinnerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    quanity: Number,
    date : Date,
})

// On utilise le schema pour créer une collection de chats 
export const WinnerModel = mongoose.model("winners", WinnerSchema)