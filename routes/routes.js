import express from "express";
import { HomeControllerGet, HomeControllerPost } from "../controllers/home.js";
import { InscriptionControllerGet, InscriptionControllerPost } from "../controllers/inscription.js";
import { ConnexionControllerGet, ConnexionControllerPost } from "../controllers/connexion.js";
import { YamsControllerGet, YamsControllerPost } from "../controllers/yams.js";
import { LogoutController} from "../controllers/logout.js";
import { StatisticController} from "../controllers/statistics.js";
const router = express.Router();;


// Home
router.get("/", HomeControllerGet);
router.post("/", HomeControllerPost);

// Inscription
router.get("/inscription", InscriptionControllerGet);
router.post("/inscription", InscriptionControllerPost);

// Connexion
router.get("/connexion", ConnexionControllerGet);
router.post("/connexion", ConnexionControllerPost);

// Logout
router.get("/logout", LogoutController)

// Game
router.get("/yams", YamsControllerGet);
router.post("/yams", YamsControllerPost);

// Game
router.get("/statistics", StatisticController);

export default router;