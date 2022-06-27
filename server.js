import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import route from "./routes/routes.js";

console.clear();

dotenv.config();
const { APP_HOST: hostname, APP_PORT: port, APP_SECRET: secret, URI_MONGODB: uri } = process.env;
const app = express();


mongoose.connect(
    uri, { connectTimeoutMS: 3000, socketTimeoutMS: 20000, useNewUrlParser: true, useUnifiedTopology: true }
)

app.use(express.static("/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', route);

app.listen(port, () => {
    console.log(`Serveur : http://${hostname}:${port}`)
})