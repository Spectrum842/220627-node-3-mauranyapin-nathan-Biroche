import mongoose from "mongoose"
// Schéma pour un chat, les schémas sont nécessaires avec Mongoose
export const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    gameAttempt: Number
})

// On utilise le schema pour créer une collection de chats 
export const UserModel = mongoose.model("users", UserSchema)