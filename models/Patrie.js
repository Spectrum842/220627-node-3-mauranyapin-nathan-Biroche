import mongoose from "mongoose"
// Schéma pour un chat, les schémas sont nécessaires avec Mongoose
export const PatrieSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: Number,
})

// On utilise le schema pour créer une collection de chats 
export const PatrieModel = mongoose.model("patries", PatrieSchema)