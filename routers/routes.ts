import { Router } from "express";
import { validateUsers } from "../middlewares/joiValidation";
import { starBattle, starRanking } from "../controllers/dataController";
export const router = Router();

router.post("/battle", validateUsers, starBattle)
router.get("/ranking", starRanking)