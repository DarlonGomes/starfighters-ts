import { Request, Response } from "express";
import "../dbstrategy/config/config"
import { starfighter } from "../repositories/battleRepository";
import { checkIfUserExist, getUserStar } from "../services/services";

export async function starBattle (req: Request, res: Response){
    const {firstUser, secondUser} = req.body;
   try {
    const checkFirstUser = checkIfUserExist(firstUser);
    const checkSecondUser = checkIfUserExist(secondUser);

    if(!checkFirstUser) await starfighter.createUser(firstUser);
    if(!checkSecondUser) await starfighter.createUser(secondUser);

    const firstValue = await getUserStar(firstUser);
    const secondValue = await getUserStar(secondUser);
    if(firstValue> secondValue){
        await starfighter.updateUser(firstUser, "wins");
        await starfighter.updateUser(secondUser, "losses");
        return res.status(200).send({
            "winner": firstUser, 
          "loser": secondUser, 
            "draw": false 
        })
    }
    if(firstValue < secondValue){
        await starfighter.updateUser(secondUser, "wins");
        await starfighter.updateUser(firstUser, "losses");
        return res.status(200).send({
            "winner": secondUser, 
          "loser": firstUser, 
            "draw": false 
        })
    }
    if(firstValue === secondValue){
        await starfighter.updateUser(firstUser,"draws");
        await starfighter.updateUser(secondUser, "draws");
        return res.status(200).send({
            "winner": null, 
          "loser": null, 
            "draw": true 
        })
    }
   } catch (error) {
    return res.status(500).send(error)
   }
}

export async function starRanking(req: Request, res: Response){
try {
    const {rows: response} = await starfighter.fighterRank();
    return res.status(200).send({figthers: response});
} catch (error) {
    return res.status(500).send(error)
}
}