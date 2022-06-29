import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import session from 'express-session';


console.clear();

dotenv.config();
const { APP_HOST: hostname, APP_PORT: port, APP_DSN: dsn, APP_SECRET } = process.env

mongoose.connect(dsn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((err) => {
    console.log(err);
})
import route from "./routes/routes.js";

const app = express();
app.use(express.static("public"));

app.use(
    session(
        {
            name: 'User',
            secret: APP_SECRET,
            resave: true,
            saveUninitialized: true,
            cookie: {maxAge: 86400000}
        }
    )
)

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.listen(port, () => {
    console.log(`Serveur : http://${hostname}:${port}`)
})


app.use('/', route);