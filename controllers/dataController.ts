import { Request, Response } from "express";
import "../dbstrategy/config/config"
import { starfighter } from "../repositories/battleRepository";
import { getUserStar } from "../services/github";

export async function starBattle (req: Request, res: Response){
    const {firstUser, secondUser} = req.body;
   try {
    const firstValue = await getUserStar(firstUser);
    const secondValue = await getUserStar(secondUser);
    
    return res.status(200).send({firstValue, secondValue})
   } catch (error) {
    return res.status(500).send(error)
   }
}

export async function starRanking(req: Request, res: Response){
try {
    const {rows: response} = await starfighter.fighterRank();
    return res.status(200).send(response);
} catch (error) {
    return res.status(500).send(error)
}
}