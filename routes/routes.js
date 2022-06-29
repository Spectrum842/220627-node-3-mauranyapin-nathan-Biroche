import express from "express";
import { HomeControllerGet, HomeControllerPost } from "../controllers/home.js";
import { InscriptionControllerGet, InscriptionControllerPost } from "../controllers/inscription.js";
import { ConnexionControllerGet, ConnexionControllerPost } from "../controllers/connexion.js";
import { YamsControllerGet, YamsControllerPost } from "../controllers/yams.js";
const router = express.Router();;



router.get("/", HomeControllerGet);
router.post("/", HomeControllerPost);

router.get("/inscription", InscriptionControllerGet);
router.post("/inscription", InscriptionControllerPost);

router.get("/connexion", ConnexionControllerGet);
router.post("/connexion", ConnexionControllerPost);


router.get("/yams", YamsControllerGet);
router.post("/yams", YamsControllerPost);


export default router;